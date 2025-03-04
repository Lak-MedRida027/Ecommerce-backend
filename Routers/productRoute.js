const express = require("express");

const router = express.Router();

const authorization = require("../Services/authService");

const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require("../utils/validators/productValidator");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  resizeImage,
} = require("../Services/productService");

const reviewRoute = require("./reviewRoute")

//* Nested Route
router.use("/:productId/reviews", reviewRoute);

router
  .route("/")
  .get(getProducts)
  .post(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    uploadProductImage,
    resizeImage,
    createProductValidator,
    createProduct
  );
router
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    updateProductValidator,
    updateProduct
  )
  .delete(
    authorization.protect,
    authorization.allowedTo("admin"),
    deleteProductValidator,
    deleteProduct
  );

module.exports = router;
