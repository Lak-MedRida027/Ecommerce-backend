const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  uploadBrandImage,
  resizeImage,
} = require("../Services/brandService");

const {
  createBrandValidator,
  getBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require("../utils/validators/brandValidator");

router
  .route("/")
  .get(getBrands)
  .post(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    uploadBrandImage,
    resizeImage,
    createBrandValidator,
    createBrand
  );
router
  .route("/:id")
  .get(getBrandValidator, getBrand)
  .put(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    uploadBrandImage,
    resizeImage,
    updateBrandValidator,
    updateBrand
  )
  .delete(
    authorization.protect,
    authorization.allowedTo("admin"),
    deleteBrandValidator,
    deleteBrand
  );

module.exports = router;
