// const asyncHandler = require("express-async-handler");

const factory = require("./handlerFactory");
const reviewModel = require("../Modules/reviewModule");


//* Nested route
exports.creatFilterObj = (req, res, next) => {
    let filterObject = {};
    if (req.params.productId) filterObject = { product: req.params.productId };
    req.filterObj = filterObject;
    next();
  };

// @desc Get list of review
// @route GET /api/v1/reviews
// @access Public
exports.getReviews = factory.getAll(reviewModel);

// @desc Get specific review by id
// @route GET /api/v1/reviews/:id
// @access Public
exports.getReview = factory.getOne(reviewModel);

//* Nested rout
exports.setproductIdAndUserIdToBody = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

// @desc Create review
// @route POST /api/v1/reviews
// @ access Privete/Protect/User
exports.createReview = factory.createOne(reviewModel);

// @desc Update spicific review
// @route PUT /api/v1/reviews/:id
// @ access Privete/Protect/User
exports.updateReview = factory.updateOne(reviewModel)

// @desc Delete specific review
// @route DELETE /api/v1/reviews/:id
// @ access Privete/Protect/User-Admin-Manager
exports.deleteReview = factory.deleteOne(reviewModel);