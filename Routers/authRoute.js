const express = require("express");

const router = express.Router();

const {
  signUp,
  logIn,
  forgotPassword,
  verifyResetCode,
  resetPassword
} = require("../Services/authService");

const {
  signUpValidator,
  logInValidator,
  forgotPasswordValidator,
  verifyResetCodeValidator,
  resetPasswordValidator
} = require("../utils/validators/authValidator");


router.post("/signup", signUpValidator, signUp)
router.post("/login", logInValidator, logIn)
router.post("/forgotPassword", forgotPasswordValidator, forgotPassword)
router.post("/verifyResetCode", verifyResetCodeValidator, verifyResetCode)
router.post("/resetPassword", resetPasswordValidator, resetPassword)

module.exports = router;
