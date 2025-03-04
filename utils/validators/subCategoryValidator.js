const slugify = require("slugify");
const { check, body } = require("express-validator");
const ValidatorMiddleware = require("../../middlewares/validatormiddleware");

//rules => validate the id checks
exports.getSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory id format"),
  ValidatorMiddleware,
];

exports.updateSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory id format"),
  body("name").optional().custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  ValidatorMiddleware,
];

exports.deleteSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory id format"),
  ValidatorMiddleware,
];

exports.createSubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("SubCategory required")
    .isLength({ min: 2 })
    .withMessage("Too less SubCategory name")
    .isLength({ max: 32 })
    .withMessage("Too much SubCategory name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("category")
    .notEmpty()
    .withMessage("SubCategory must belong to category")
    .isMongoId()
    .withMessage("Invalid category id format"),
  ValidatorMiddleware,
];
