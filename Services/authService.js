const crypto = require("crypto");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const ApiError = require("../utils/apiError");
const sendEmail = require("../utils/sendEmail");
const createToken = require("../utils/createToken");

const userModel = require("../Modules/userModule");

//*  @desc SignUp
//*  @route POSt /api/v1/auth
//*  @ access Public
exports.signUp = asyncHandler(async (req, res, next) => {
  //* 1)- Create user
  const user = await userModel.create({
    name: req.body.name,
    slug: req.body.slug,
    email: req.body.email,
    password: req.body.password,
  });

  //* 2)- Create token
  const token = createToken(user._id);

  //* 3)- send res
  res.status(201).json({ data: user, token });
});

//*  @desc LogIn
//*  @route POSt /api/v1/auth
//*  @ access Public
exports.logIn = asyncHandler(async (req, res, next) => {
  //* 1)- check if email & password correct
  const user = await userModel.findOne({ email: req.body.email });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return next(new ApiError("Invalid email or password", 401));
  }

  //* 2)- Create token
  const token = createToken(user._id);

  //* 3)- send res
  res.status(201).json({ data: user, token });
});

//* @desc make sure that the user logged in
exports.protect = asyncHandler(async (req, res, next) => {
  //*  1) check if token exist, if exist catch it
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Beare")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ApiError(
        "You are not login,Please login to get access to this route",
        401
      )
    );
  }

  //*  2) verify token (no change happens, expired token)
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  //*  3) check if user exists
  const currentUser = await userModel.findById(decoded.userId);

  if (!currentUser) {
    return next(
      new ApiError(
        "The user that belong to this token does no longer exist",
        401 //* 401->Unauthorized
      )
    );
  }

  //*  4) check if the user account active
  if (!currentUser.active) {
    return next(
      new ApiError(
        "Your account is deactivate,Active your account to get access to this route",
        401 //* 401->Unauthorized
      )
    );
  }

  //*  5) check if user change his password after token created (must login to pass the error)
  if (currentUser.passwordChangeAt) {
    const passChangedTimeStamp = parseInt(
      currentUser.passwordChangeAt.getTime() / 1000,
      10
    );

    //* Password changed after token created (Error)
    if (passChangedTimeStamp > decoded.iat) {
      return next(
        new ApiError(
          "User recently changed his password,Please login again..",
          401 //* 401->Unauthorized
        )
      );
    }
  }

  req.user = currentUser;
  next();
});

//* @desc Authorization (check if the user can access the route)
exports.allowedTo = (...roles) =>   //* roles will cames as parametter in array of strings
  asyncHandler(async (req, res, next) => {
    //* 1) access roles
    //* 2) access registered user (req.user.role)  //* req.user came from protect function
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError("You are not allowed to access this route", 403) //* 403->forbidden (no authorized)
      );
    }

    next();
  });

//*  @desc Forgot Password
//*  @route POSt /api/v1/forgotPassword
//*  @ access Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  //*  1) Get user by email
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new ApiError(`There is no user with this email: ${req.body.email}`, 404)
    ); //* 404->not found
  }

  //*  2) If user exsity, Generate reset code (random  6 digits) after that hash it and save it in DB
  //* generate reset code
  const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

  //* hash the reset code
  const hashedResetCode = crypto
    .createHash("sha256")
    .update(resetCode)
    .digest("hex");

  //* Save hashed reset code into DB
  user.passwordResetCode = hashedResetCode;
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000; //*  add expiration time for reset code (10 min)
  user.passwordResetVeryfied = false; //*  to check if the reset code used or not

  await user.save();

  //*  3) Send reset code via email
  try {
    const message = `Hi ${user.name}, \n Enter this code to complete the reset. \n ${resetCode} \n Thanks for helping us keep your account secure. \n The Pick & Buy Team`;
    await sendEmail({
      email: user.email,
      subject: "Pick & Buy Store",
      message,
    });
  } catch (err) {
    user.passwordResetCode = undefined;
    user.passwordResetExpires = undefined;
    user.passwordResetVeryfied = undefined;

    return next(new ApiError("There is an error in sending reset code", 500));
  }
  
  res.status(200).json({
    status: "Success",
    message: "Reset code sent to your email",
  });
});

//*  @desc Verify Reset Code
//*  @route POSt /api/v1/verifyResetCode
//*  @ access Public
exports.verifyResetCode = asyncHandler(async (req, res, next) => {
  //*  1) Get user by reset code
  const hashedResetCode = crypto
    .createHash("sha256")
    .update(req.body.resetCode)
    .digest("hex");

  const user = await userModel.findOne({
    passwordResetCode: hashedResetCode,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ApiError("Reset code invalid or expired"));
  }

  //*  2) Reset code valid
  user.passwordResetVeryfied = true;

  await user.save();

  res.status(200).json({ status: "Success" });
});

//*  @desc Reset Password
//*  @route PUT /api/v1/resetPassword
//*  @ access Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  //*  1) Get user by email
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new ApiError(`There is no user with this email: ${req.body.email}`, 404)
    );
  }

  //*  2) check if Reset code verified
  if (!user.passwordResetVeryfied) {
    return next(new ApiError("Reset code not verified", 400));
  }

  //*  3) update the password and reset the passwordReset to undefined
  user.password = req.body.newPassword;
  user.passwordResetCode = undefined;
  user.passwordResetExpires = undefined;
  user.passwordResetVeryfied = undefined;

  await user.save();

  //*  4) If everything is good, Generate new token for the user
  const token = createToken(user._id);
  res.status(200).json({ token });
});
