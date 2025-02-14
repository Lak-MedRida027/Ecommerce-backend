const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadUserImage,
  resizeImage,
  changeUserPassword,
  getLoggedUserData,
  updateLoggedUserPassword,
  updateLoggedUserData,
  activateMe,
  deactivateMe,
} = require("../Services/userService");

const {
  createUserValidator,
  getUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
  changeLoggedUserPasswordValidator,
  updateLoggedUserDataValidator,
} = require("../utils/validators/userValidator");

router.put("/activate/:id", activateMe);

router.use(authorization.protect);

// User can access this routes
router.get("/getMe", getLoggedUserData, getUser);
router.put(
  "/changeMyPassword",
  changeLoggedUserPasswordValidator,
  updateLoggedUserPassword
);
router.put("/updateMe", updateLoggedUserDataValidator, updateLoggedUserData);
router.delete("/deactivateMe", deactivateMe);

router.use(authorization.allowedTo("admin", "manager"));

// Only admin can use this routes
router
  .route("/")
  .get(getUsers)
  .post(uploadUserImage, resizeImage, createUserValidator, createUser);

router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

router.put(
  "/changePassword/:id",
  changeUserPasswordValidator,
  changeUserPassword
);

module.exports = router;
