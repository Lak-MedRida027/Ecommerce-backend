const mongoose = require("mongoose");

//Schema
const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Brand required"],
      unique: [true, "Brand must be unique"],
      minlength: [3, "Too less Brand name"],
      maxlength: [32, "Too much Brand name"],
    },
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

//mongoose middleware
const setImageURL = (doc) => {
  if(doc.image){
    const imageURL = `${process.env.BASE_URL}/categories/${doc.image}`;
    doc.image = imageURL;
  }
}
//this middleware work with findOne ,findAll and update before the doc sends in form response
BrandSchema.post('init', (doc)=> {
  setImageURL(doc);
});
//this middleware work with create after save the doc into DB
BrandSchema.post('save', (doc)=> {
  setImageURL(doc);
});

//Module
module.exports = mongoose.model("Brand", BrandSchema);




