const path = require('path');

const express = require("express");
const morgan = require("morgan"); //*  used to show the req in terminal with status code
const dotenv = require("dotenv"); //*  to read from config.env file
const cors = require("cors");
const compression = require('compression')
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')

dotenv.config({ path: "config.env" }); //* if the file was named .env this step be ignored

const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errormiddleware");
const dbconnection = require("./config/database");

//* import mount Route
const mountRoute = require('./Routers')  //! automatically will read the index file
const { webhookCheckout } = require('./Services/orderService')

//* Connect with DB
dbconnection();

//*  express app
const app = express();

//* Enable cross-domains to access
app.use(cors())
app.options('*', cors())

//* Compress all res
app.use(compression())

//* Webhook checkout 
app.post('/webhook-checkout', express.raw({type: 'application/json'}), webhookCheckout)

//* to allowe serving for images in uploads file
app.use(express.static(path.join(__dirname, 'uploads')))  

//* Midellewares
app.use(express.json({ limit: "20kb" }));

if (process.env.NODE_ENV === "development") {
  //* detect our node env
  app.use(morgan("dev")); //* use middleware
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//* To sanitize the data
app.use(mongoSanitize());
app.use(xss())

//* Limit each IP to 100 requests per `window` (here, per 15 minutes).
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, 
  message: { error: 'Too many requests, please try again later.' }
})

app.use("/api", limiter)

//* Middleware to protect against HTTP Parameter Pollution attacks
app.use(hpp({ whitelist: [ 'price', 'sold', 'ratingsAverage', 'ratingsQuantity', 'quantity'] }));

//* Mount Routers
mountRoute(app);

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