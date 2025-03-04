const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");

const factory = require("./handlerFactory");
const ApiError = require('../utils/apiError')
const upload = require('../middlewares/uploadImageMiddleware');
const createToken = require('../utils/createToken');

const userModel = require("../Modules/userModule");

//upload singel image
exports.uploadUserImage = upload.uploadSingelImage('profileImg');

//image processing
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `user-${uuidv4()}-${Date.now()}.jpeg`;

  if(req.file){
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/users/${fileName}`);
  }

  //save the image name into our DB
  req.body.profileImg = fileName;

  next();
});

// @desc Get list of user
// @route GET /api/v1/users
// @access Privete/Admin
exports.getUsers = factory.getAll(userModel);

// @desc Get specific user by id
// @route GET /api/v1/users/:id
// @access Privete/Admin
exports.getUser = factory.getOne(userModel);

// @desc Create user
// @route POST /api/v1/users
// @ access Privete/Admin
exports.createUser = factory.createOne(userModel);

// @desc Update spicific user
// @route PUT /api/v1/users/:id
// @ access Privete/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  //update User
  const document = await userModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    slug: req.body.slug,
    email: req.body.email,
    phone: req.body.phone,
    profileImg: req.body.profileImg,
  }, {
    new: true,
  });
  if (!document)
    return next(
      new ApiError(`No document for this id: ${req.params.id}`, 404)
    );
  res.status(200).json({ data: document });
});

// @desc Change password of user
// @route PUT /api/v1/users/changePassword/:id
// @ access Privete
exports.changeUserPassword = asyncHandler(async (req, res, next) => {
  //update document
  const document = await userModel.findByIdAndUpdate(req.params.id, {
    password: await bcrypt.hash(req.body.password, 12),
    passwordChangeAt: Date.now(),
  }, {
    new: true,
  });
  if (!document)
    return next(
      new ApiError(`No document for this id: ${req.params.id}`, 404)
    );
  res.status(200).json({ data: document });
});
// @desc Delete specific user
// @route DELETE /api/v1/users/:id
// @ access Privete/Admin
exports.deleteUser = factory.deleteOne(userModel);

// @desc Get logged user data
// @route GET /api/v1/users/getMe
// @access Public/Protect
exports.getLoggedUserData = asyncHandler((req, res, next) => {
  req.params.id = req.user._id;
  next();
})

// @desc Update  logged user password 
// @route PUT /api/v1/users/changeMyPassword
// @access Public/Protect
exports.updateLoggedUserPassword = asyncHandler(async (req, res, next) => {
  // 1) Update user password
  const user = await userModel.findByIdAndUpdate(req.user._id, {
    password: await bcrypt.hash(req.body.password, 12),
    passwordChangeAt: Date.now(),
  }, {
    new: true,
  });

  // 2) Generate new token
  const token = createToken(user._id);

  res.status(200).json({ data: user, token});
})

// @desc Update  logged user data
// @route PUT /api/v1/users/updateMe
// @access Public/Protect
exports.updateLoggedUserData = asyncHandler(async (req, res, next) => {
  // 1) Update user data
    const user = await userModel.findByIdAndUpdate(req.user._id, {
      name: req.body.name,
      slug: slugify(req.body.name),
      email: req.body.email,
      phone: req.body.phone,
    }, {
      new: true,
    });

    // 2) Generate new token
    const token = createToken(user._id)

    res.status(200).json({ data: user, token});
})

// @desc Deactivate logged user
// @route DELETE /api/v1/users/deactivateMe
// @access Public/Protect
exports.deactivateMe = asyncHandler(async (req, res, next) => {
    // 1) deactivate user
    await userModel.findByIdAndUpdate(req.user._id, {
      active: false,
    }, {
      new: true,
    });

    res.status(200).json({ message: 'Account Deactivated'});
})

// @desc Activate logged user
// @route DELETE /api/v1/users/activate
// @access Public/Protect
exports.activateMe = asyncHandler(async (req, res, next) => {
  // 1) activate user
  await userModel.findByIdAndUpdate(req.params.id, {
    active: true,
  }, {
    new: true,
  });

  res.status(200).json({ message: 'Account Activated'});
})