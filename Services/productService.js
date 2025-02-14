const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const { uploadMixOfImages } = require('../middlewares/uploadImageMiddleware')
const factory = require("./handlerFactory");
const productModel = require("../Modules/productModule");


exports.uploadProductImage = uploadMixOfImages([
  {
    name: "imageCover",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 5,
  },
]);

exports.resizeImage = asyncHandler(async (req, res, next) => {
  //image processing for imageCover
  if (req.files.imageCover) {
    const imageCoverFileName = `product-${uuidv4()}-${Date.now()}-cover.jpeg`;
    
    await sharp(req.files.imageCover[0].buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/products/${imageCoverFileName}`);

    //save the name of image into our DB
    req.body.imageCover = imageCoverFileName;
  }
  //image processing for images array
  if (req.files.images) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (img, index) => {
        const imageFileName = `product-${uuidv4()}-${Date.now()}-${index + 1}.jpeg`;

        await sharp(img.buffer)
          .resize(600, 600)
          .toFormat("jpeg")
          .jpeg({ quality: 95 })
          .toFile(`uploads/products/${imageFileName}`);

        //save the image name into our DB
        req.body.images.push(imageFileName);
      })
    );
  }

  next();
});

// @desc Get list of products
// @route GET /api/v1/products
// @access Public
exports.getProducts = factory.getAll(productModel, "Products");

// @desc Get specific product by id
// @route GET /api/v1/products/:id
// @access Public
exports.getProduct = factory.getOne(productModel, "reviews");

// @desc Create product
// @route POST /api/v1/products
// @ access Privete/Admin-Manager
exports.createProduct = factory.createOne(productModel);

// @desc Update spicific product
// @route PUT /api/v1/products/:id
// @ access Privete/Admin-Manager
exports.updateProduct = factory.updateOne(productModel);

// @desc Delete specific product
// @route DELETE /api/v1/products/:id
// @ access Privete/Admin
exports.deleteProduct = factory.deleteOne(productModel);
