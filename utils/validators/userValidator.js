const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const { check, body } = require("express-validator");
const ValidatorMiddleware = require("../../middlewares/validatormiddleware");

const userModule = require("../../Modules/userModule");

exports.createUserValidator = [
  check("name")
    .notEmpty()
    .withMessage("User required")
    .isLength({ min: 3 })
    .withMessage("Too less User name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
    check('email')
    .notEmpty()
    .withMessage('Email required')
    .isEmail()
    .withMessage('Invalid email address')
    .custom((val) =>
      userModule.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error('E-mail already in user'));
        }
      })
    ),

  check("password")
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .custom((psw, { req }) => {
      if (req.body.passwordConfirm) {
        if (psw !== req.body.passwordConfirm) {
          throw new Error("Password confirmation incorrect");
        }
      }
      return true;
    }),

  check("passwordConfirm")
    .notEmpty()
    .withMessage("Password confirmation required"),

  check("phone")
    .optional()
    .isMobilePhone("ar-DZ")
    .withMessage("Invalid phone number only accepted Alger phone numbers"),

  check("role").optional(),
  check("profileImg").optional(),
  ValidatorMiddleware,
];

exports.getUserValidator = [
  check("id").isMongoId().withMessage("Invalid User id format"),
  ValidatorMiddleware,
];

exports.updateUserValidator = [
  check("id").isMongoId().withMessage("Invalid User id format"),
  check("name")
    .isLength({ min: 3 })
    .withMessage("Too less User name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
    check('email')
    .isEmail()
    .withMessage('Invalid email address')
    .custom((val) =>
      userModule.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error('E-mail already in user'));
        }
      })
    ),
  check("phone")
    .optional()
    .isMobilePhone("ar-DZ")
    .withMessage("Invalid phone number only accepted Alger phone numbers"),

  check("role").optional(),
  check("profileImg").optional(),
  ValidatorMiddleware,
];

exports.deleteUserValidator = [
  check("id").isMongoId().withMessage("Invalid User id format"),
  ValidatorMiddleware,
];

exports.changeUserPasswordValidator = [
  check("id").isMongoId().withMessage("Invalid user id format"),

  body("currentPassword")
    .notEmpty()
    .withMessage("You must enter your current password"),

  body("confirmPassword")
    .notEmpty()
    .withMessage("You must enter the password confirm"),

  check("password")
    .notEmpty()
    .withMessage("You must enter new password")
    .custom(async (val, { req }) => {
      // 1) Verify current password
      const user = await userModule.findById(req.params.id);
      if (!user) {
        throw new Error("There is no user for this id");
      }
      const isCorrectPassword = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      );
      if (!isCorrectPassword) {
        throw new Error("Incorrect current password");
      }

      // 2) Verify password confirm
      if (val !== req.body.confirmPassword) {
        throw new Error("Password Confirmation incorrect");
      }
      return true;
    }),
  ValidatorMiddleware,
];

exports.changeLoggedUserPasswordValidator = [
  body("currentPassword")
    .notEmpty()
    .withMessage("You must enter your current password"),

  body("confirmPassword")
    .notEmpty()
    .withMessage("You must enter the password confirm"),

  check("password")
    .notEmpty()
    .withMessage("You must enter new password")
    .custom(async (val, { req }) => {
      // 1) Verify current password
      const user = await userModule.findById(req.user._id);
      if (!user) {
        throw new Error("There is no user for this id");
      }
      const isCorrectPassword = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      );
      if (!isCorrectPassword) {
        throw new Error("Incorrect current password");
      }

      // 2) Verify password confirm
      if (val !== req.body.confirmPassword) {
        throw new Error("Password Confirmation incorrect");
      }
      return true;
    }),
  ValidatorMiddleware,
];

exports.updateLoggedUserDataValidator = [
  check("name")
  .optional()
  .isLength({ min: 3 })
  .withMessage("Too less User name")
  .custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  check("email")
  .optional()
    .isEmail()
    .withMessage("Invalid email address")
    .custom((email) => {
      userModule.findOne({ email }).then((user) => {
        if (user === null) {
          return new Error("E-mail already used");
        }
      });
      return true;
    }),
  check("phone")
    .optional()
    .isMobilePhone("ar-DZ")
    .withMessage("Invalid phone number only accepted Alger phone numbers"),

  check("profileImg").optional(),
  ValidatorMiddleware,
];