const express = require("express");

//* mergeParams allow us to access parameters on other routes
//* ex: we need to access categoryId from Category router
const router = express.Router({ mergeParams: true });

const authorization = require("../Services/authService");

const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  setCategoryIdToBody,
  creatFilterObj,
} = require("../Services/subCategoryService");

router
  .route("/")
  .post(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    setCategoryIdToBody,
    createSubCategoryValidator,
    createSubCategory
  )
  .get(creatFilterObj, getSubCategories);
router
  .route("/:id")
  .get(getSubCategoryValidator, getSubCategory)
  .put(
    authorization.protect,
    authorization.allowedTo("admin", "manager"),
    updateSubCategoryValidator,
    updateSubCategory
  )
  .delete(
    authorization.protect,
    authorization.allowedTo("admin"),
    deleteSubCategoryValidator,
    deleteSubCategory
  );

module.exports = router;
