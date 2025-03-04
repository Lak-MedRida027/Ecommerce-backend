const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product name required"],
      unique: [true, "Product name must be unique"],
      minlength: [3, "Too less product name"],
      maxlength: [100, "Too much product name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Product description required"],
      minlength: [20, "Too short product description"],
      maxlength: [2000, "Too much product description"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity required"],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Product price required"],
      trim: true,
      max: [200000, "Too long product price"],
    },
    priceAfterDiscount: {
      type: Number,
    },
    colors: [String],
    imageCover: {
      type: String,
      required: [true, "Product Image cover is required"],
    },
    images: [String],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Product must be belong to category"],
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    ratingsAverage: {
      type: Number,
      min: ["1", "Rating must be above or equal 1.0"],
      max: ["5", "Rating must be below or equal 5.0"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    //! to enable virual population
    toObject: { virtuals: true },  
    toJSON: { virtuals: true },
  }
);

//* Mongoose virtual population
ProductSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "product",
  localField: "_id",
})

//* Mongoose query middleware
ProductSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "name -_id",
  });
  next();
});

const setImageURL = (doc) => {
  if (doc.imageCover) {
    const imageCoverURL = `${process.env.BASE_URL}/products/${doc.imageCover}`;
    doc.imageCover = imageCoverURL;
  }

  if (doc.images) {
    const imagesList = [];
    doc.images.forEach((img) => {
      const imageURL = `${process.env.BASE_URL}/products/${img}`;
      imagesList.push(imageURL);
    });
    doc.images = imagesList;
  }
};


//* this middleware work with findOne ,findAll and update before the doc sends in form response
ProductSchema.post("init", (doc) => {
  setImageURL(doc);
});

//* this middleware work with create after save the doc into DB
ProductSchema.post("save", (doc) => {
  setImageURL(doc);
});

module.exports = mongoose.model("Product", ProductSchema);
