const subCategoryModel = require("../Modules/subCategoryModule");
const factory = require("./handlerFactory");

//* middleware for set the categoryId to req.body when we create a subcategory
exports.setCategoryIdToBody = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

//* middleware for create req.filterObj from filterObject when we use the nested route
exports.creatFilterObj = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObj = filterObject;
  next();
};

// @desc Get list of SubCategories
// @route GET /api/v1/subcategory
// @access Public
exports.getSubCategories = factory.getAll(subCategoryModel);

// @desc Get specific SubCategory by id
// @route GET /api/v1/subcategory/:id
// @access Public
exports.getSubCategory = factory.getOne(subCategoryModel);

// @desc Create subCategory
// @route POST /api/v1/subcategory
// @ access Privete/Admin-Manager
exports.createSubCategory = factory.createOne(subCategoryModel);

// @desc Update spicific SubCategory
// @route PUT /api/v1/subcategory/:id
// @ access Privete/Admin-Manager
exports.updateSubCategory = factory.updateOne(subCategoryModel);

// @desc Delete specific SubCategory
// @route DELETE /api/v1/subcategory/:id
// @ access Privete/Admin
exports.deleteSubCategory = factory.deleteOne(subCategoryModel);