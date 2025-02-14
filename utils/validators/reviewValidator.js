const { check } = require("express-validator");
const ValidatorMiddleware = require("../../middlewares/validatormiddleware");

const Review = require("../../Modules/reviewModule");

//rules => validate the id checks
exports.getReviewValidator = [
  check("id").isMongoId().withMessage("Invalid Review id format"),
  ValidatorMiddleware,
];

exports.updateReviewValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Review id format")
    .custom((val, { req }) =>
      // chack that this review belong to the user
      Review.findById(val).then((review) => {
        if (!review) {
          return Promise.reject(
            new Error(`Theres is no review with id ${val}`)
          );
        }

        if (review.user._id.toString() !== req.user._id.toString()) {
          return Promise.reject(
            new Error("You are not allowed to do this action")
          );
        }
      })
    ),
  ValidatorMiddleware,
];

exports.deleteReviewValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Review id format")
    .custom((val, { req }) => {
      // chack that this review belong to the user
      if (req.user.role === "user") {
        return Review.findById(val).then((review) => {
          if (!review) {
            return Promise.reject(
              new Error(`Theres is no review with id ${val}`)
            );
          }
          if (review.user._id.toString() !== req.user._id.toString()) {
            return Promise.reject(
              new Error("You are not allowed to do this action")
            );
          }
        });
      }
      return true;
    }),
  ValidatorMiddleware,
];

exports.createReviewValidator = [
  check("title").optional(),
  check("rating")
    .notEmpty()
    .withMessage("Rating value required")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating values must be between 1 and 5"),
  check("user").isMongoId().withMessage("Invalid user id for this Review"),
  check("product")
    .isMongoId()
    .withMessage("Invalid product id for this Review")
    .custom((val, { req }) =>
      // Here we check that each user must do 1 review for product
      Review.findOne({ user: req.user._id, product: req.body.product }).then(
        (review) => {
          if (review) {
            return Promise.reject(
              new Error("You already created a review before!")
            );
          }
        }
      )
    ),
  ValidatorMiddleware,
];
