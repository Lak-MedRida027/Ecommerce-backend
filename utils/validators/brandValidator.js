const slugify = require("slugify")
const { check, body } = require("express-validator");
const ValidatorMiddleware = require("../../middlewares/validatormiddleware");

//rules => validate the id checks
exports.getBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),
  ValidatorMiddleware,
];

exports.updateBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),body("name").optional().custom((val , {req}) =>{
    req.body.slug = slugify(val);
    return true;
  }),
  ValidatorMiddleware,
];

exports.deleteBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),
  ValidatorMiddleware,
];

exports.createBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Brand required")
    .isLength({ min: 3 })
    .withMessage("Too less Brand name")
    .isLength({ max: 32 })
    .withMessage("Too much Brand name").custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  ValidatorMiddleware,
];
