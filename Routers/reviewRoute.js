const express = require("express");

const router = express.Router({ mergeParams: true });


const {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  creatFilterObj,
  setproductIdAndUserIdToBody
} = require("../Services/reviewService");

const {
  createReviewValidator,
  getReviewValidator,
  updateReviewValidator,
  deleteReviewValidator,
} = require("../utils/validators/reviewValidator");

const authorization = require("../Services/authService");

router
  .route("/")
  .get(creatFilterObj, getReviews)
  .post(
    authorization.protect,
    authorization.allowedTo("user"),
    setproductIdAndUserIdToBody,
    createReviewValidator,
    createReview
  );
router
  .route("/:id")
  .get(getReviewValidator, getReview)
  .put(
    authorization.protect,
    authorization.allowedTo("user"),
    updateReviewValidator,
    updateReview
  )
  .delete(
    authorization.protect,
    authorization.allowedTo("user","manager","admin"),
    deleteReviewValidator,
    deleteReview
  );

module.exports = router;
