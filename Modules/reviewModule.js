const mongoose = require('mongoose');
const Product = require('./productModule');

const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String, 
    },
    rating: {
      type: Number,
      min: [1, 'Min ratings value is 1.0 !'],
      max: [5, 'Max ratings value is 5.0 !'],
      required: [true, 'Review rating required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to user'],
    },
    //* parent refrence (one to many)
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Review must belong to product'],
    },
  },
  { timestamps: true }
);

//* Population
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

//* Aggregation
reviewSchema.statics.calcAvrgRatingsAndQty = async function (productId) {
  const result = await this.aggregate([
    //* stage 1: get all the products that match the id comes
    {
      $match: { product: productId },
    },
    //* stage 2: grouping using id and calc the avrgRatings, RatingsQty
    {
      $group: {
        _id: '$product', 
        avrgRatings: { $avg: '$rating' },
        RatingsQty: { $sum: 1 },
      },
    },
  ]);

  if (result.length > 0) {
    await Product.findByIdAndUpdate(productId, {
      ratingsAverage: result[0].avrgRatings,
      ratingsQuantity: result[0].RatingsQty,
    });
  } else {
    // If there are no reviews, reset the ratings to default values
    await Product.findByIdAndUpdate(productId, {
      ratingsAverage: 0,
      ratingsQuantity: 0,
    });
  }
};

//* Mongoose middleware
reviewSchema.post('save', async function () {
  await this.constructor.calcAvrgRatingsAndQty(this.product);
});

//! from mongoose 6.0 you need to add this query to select your target that you want to work with it
reviewSchema.post('deleteOne', { document: true, query: false }, async function () {
  await this.constructor.calcAvrgRatingsAndQty(this.product);
});

module.exports = mongoose.model('Review', reviewSchema);