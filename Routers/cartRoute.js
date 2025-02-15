const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  addProductToCart,
  getLoggedUserCart,
  removeItemFromCart,
  clearUserCart,
  updateItemQty,
  applyCoupon
} = require("../Services/cartService");

router.use(authorization.protect, authorization.allowedTo("user"));
router.route("/").get(getLoggedUserCart).post(addProductToCart).delete(clearUserCart);
router.put("/applyCoupon", applyCoupon)
router.route("/:itemId").delete(removeItemFromCart).put(updateItemQty)
module.exports = router;
