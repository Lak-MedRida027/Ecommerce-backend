const mongoose = require("mongoose");

const dbconnection = () => {
  mongoose
    .connect(process.env.DB_URI) //this function return promise so i must do .then and handling error
    .then((con) => {
      console.log(`DB connected: ${con.connection.host}`); //to show our host
    })
};

module.exports = dbconnection;