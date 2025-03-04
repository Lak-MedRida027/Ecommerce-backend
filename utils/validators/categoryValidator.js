const slugify = require("slugify");
const { check , body} = require("express-validator");
const ValidatorMiddleware = require("../../middlewares/validatormiddleware");

//rules => validate the id checks
exports.getCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  ValidatorMiddleware,
];

exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),body("name").optional().custom((val , {req}) =>{
    req.body.slug = slugify(val);
    return true;
  }),
  ValidatorMiddleware,
];

exports.deleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  ValidatorMiddleware,
];

exports.createCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("category required")
    .isLength({ min: 3 })
    .withMessage("Too less category name")
    .isLength({ max: 32 })
    .withMessage("Too much category name").custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  ValidatorMiddleware,
];
