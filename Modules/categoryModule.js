const mongoose = require("mongoose");

//* Schema
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "category required"],
      unique: [true, "category must be unique"],
      minlength: [3, "Too less category name"],
      maxlength: [32, "Too much category name"],
    },
    //* if the category named 'A and B' => when the front want to access to this category it will be: amazone/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

//* mongoose middleware
const setImageURL = (doc) => {
  if(doc.image){
    const imageURL = `${process.env.BASE_URL}/categories/${doc.image}`;
    doc.image = imageURL;
  }
}

//* this middleware work with findOne ,findAll and update before the doc sends in form response
CategorySchema.post('init', (doc)=> {
  setImageURL(doc);
});

//* this middleware work with create after save the doc into DB
CategorySchema.post('save', (doc)=> {
  setImageURL(doc);
});

//* Module
module.exports = mongoose.model("Category", CategorySchema);


