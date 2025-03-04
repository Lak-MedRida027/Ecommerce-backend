const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const factory = require("./handlerFactory");
const upload = require('../middlewares/uploadImageMiddleware');
const brandModel = require("../Modules/brandModule");

//upload singel image
exports.uploadBrandImage = upload.uploadSingelImage('image');

//image processing
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `brand-${uuidv4()}-${Date.now()}.jpeg`;

  if(req.file){
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/brands/${fileName}`);
  }

  //save the image name into our DB
  req.body.image = fileName;

  next();
});

// @desc Get list of brand
// @route GET /api/v1/brands
// @access Public
exports.getBrands = factory.getAll(brandModel);

// @desc Get specific brand by id
// @route GET /api/v1/brands/:id
// @access Public
exports.getBrand = factory.getOne(brandModel);

// @desc Create brand
// @route POST /api/v1/brands
// @ access Privete/Admin-Manager
exports.createBrand = factory.createOne(brandModel);

// @desc Update spicific brand
// @route PUT /api/v1/brands/:id
// @ access Privete/Admin-Manager
exports.updateBrand = factory.updateOne(brandModel)

// @desc Delete specific brand
// @route DELETE /api/v1/brands/:id
// @ access Privete/Admin
exports.deleteBrand = factory.deleteOne(brandModel);