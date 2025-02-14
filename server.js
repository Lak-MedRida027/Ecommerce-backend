const path = require('path');

const express = require("express");
const morgan = require("morgan"); //*  used to show the req in terminal with status code
const dotenv = require("dotenv"); //*  to read from config.env file
const cors = require("cors");

dotenv.config({ path: "config.env" }); //* if the file was named .env this step be ignored

const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errormiddleware");
const dbconnection = require("./config/database");

//* import Route
const categoryRoute = require("./Routers/categoryRoute");
const subCategoryRoute = require("./Routers/subCategoryRoute");
const brandRoute = require("./Routers/brandRoute");
const productRoute = require("./Routers/productRoute");
const userRoute = require("./Routers/userRoute");
const authRoute = require("./Routers/authRoute");
const reviewRoute = require("./Routers/reviewRoute");
const wishlistRoute = require("./Routers/wishlistRoute");
const addressRoute = require("./Routers/addressRoute");

//* Connect with DB
dbconnection();

//*  express app
const app = express(); //* create our express app
app.use(cors())
app.options('*', cors())
app.use(express.static(path.join(__dirname, 'uploads')))  //* to allowe serving for images in uploads file

//* Midellewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  //* detect our node env
  app.use(morgan("dev")); //* use middleware
  console.log(`mode: ${process.env.NODE_ENV}`);
}



//* Mount Routers
app.use("/api/v1/categories" , categoryRoute);
app.use("/api/v1/subcategories" , subCategoryRoute);
app.use("/api/v1/brands" , brandRoute);
app.use("/api/v1/products" , productRoute);
app.use("/api/v1/users" , userRoute);
app.use("/api/v1/auth" , authRoute);
app.use("/api/v1/reviews" , reviewRoute);
app.use("/api/v1/wishlist" , wishlistRoute);
app.use("/api/v1/addresses" , addressRoute);

app.all('*' , (req ,res ,next) =>{
  //* Create error
  //*  const err = Error(`Can't find this route: ${req.originalUrl}`); 
  //* send the error to Globale E.H.M
  //*  next(err.message);

  next(new ApiError(`Can't find this route: ${req.originalUrl}` ,400));
})

//* Global error handling middleware
app.use(globalError)

const PORT = process.env.PORT || 8000; //* import our PORT from env file
const server = app.listen(PORT, () => {
  console.log(`App running! running on port ${PORT}`);
});

//* Handel rejection errors outside express
process.on("unhandledRejection" , (err) =>{
  console.error(`UnhandledRejection errors: ${err.name} | ${err.message} | ${err.stack}`);
  server.close(() =>{
    console.error("shutting down...");
    process.exit(1);
  })
})