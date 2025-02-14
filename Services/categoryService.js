const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const asyncHandler = require("express-async-handler");

const factory = require("./handlerFactory");
const categoryModel = require("../Modules/categoryModule");
const upload = require('../middlewares/uploadImageMiddleware');

//upload singel image
exports.uploadCategoryImage = upload.uploadSingelImage('image');

//image processing
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `category-${uuidv4()}-${Date.now()}.jpeg`;

  if(req.file){
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/categories/${fileName}`);
  }

  //save the image name into our DB
  req.body.image = fileName;

  next();
});

// @desc Get list of categories
// @route GET /api/v1/category
// @access Public
exports.getCategories = factory.getAll(categoryModel);

// @desc Get specific category by id
// @route GET /api/v1/category/:id
// @access Public
exports.getCategory = factory.getOne(categoryModel);

// @desc Create category
// @route POST /api/v1/category
// @ access Privete/Admin-Manager
exports.createCategory = factory.createOne(categoryModel);

// @desc Update spicific category
// @route PUT /api/v1/category/:id
// @ access Privete/Admin-Manager
exports.updateCategory = factory.updateOne(categoryModel);

// @desc Delete specific category
// @route DELETE /api/v1/category/:id
// @ access Privete/Admin
exports.deleteCategory = factory.deleteOne(categoryModel);
