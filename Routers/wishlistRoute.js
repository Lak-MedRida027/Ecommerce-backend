const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  addProductToWishlist,
  removeProductToWishlist,
  getLoggedUserWishlist,
} = require("../Services/wishlistService");

router.use(authorization.protect, authorization.allowedTo("user"));

router.route("/").post(addProductToWishlist).get(getLoggedUserWishlist);

router.route("/:productId").delete(removeProductToWishlist);

module.exports = router;
