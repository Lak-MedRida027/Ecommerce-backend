const express = require("express");

const router = express.Router();

const {
  getCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../Services/couponService");

const authorization = require("../Services/authService");

router.use(authorization.protect, authorization.allowedTo("admin", "manager"));

router.route("/").get(getCoupons).post(createCoupon);
router.route("/:id").get(getCoupon).put(updateCoupon).delete(deleteCoupon);

module.exports = router;