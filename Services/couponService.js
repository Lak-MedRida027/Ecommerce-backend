const factory = require("./handlerFactory");
const couponModel = require("../Modules/couponModule");

// @desc Get list of coupon
// @route GET /api/v1/coupons
// @ access Privete/Admin-Manager
exports.getCoupons = factory.getAll(couponModel);

// @desc Get specific coupon by id
// @route GET /api/v1/coupons/:id
// @ access Privete/Admin-Manager
exports.getCoupon = factory.getOne(couponModel);

// @desc Create coupon
// @route POST /api/v1/coupons
// @ access Privete/Admin-Manager
exports.createCoupon = factory.createOne(couponModel);

// @desc Update spicific coupon
// @route PUT /api/v1/coupons/:id
// @ access Privete/Admin-Manager
exports.updateCoupon = factory.updateOne(couponModel)

// @desc Delete specific coupon
// @route DELETE /api/v1/coupons/:id
// @ access Privete/Admin-Manager
exports.deleteCoupon = factory.deleteOne(couponModel);