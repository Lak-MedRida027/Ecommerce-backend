const mongoose = require("mongoose");

//Schema
const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "SubCategory must be unique"],
      minlength: [2, "Too less SubCategory name"],
      maxlength: [32, "Too much SubCategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "SubCategory must belong to parent category"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);
