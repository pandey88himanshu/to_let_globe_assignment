const mongoose = require("mongoose");
//enabling .env file config
require("dotenv").config();
//creating config function
const config = async () => {
  try {
    mongoose.connect(process.env.DB).then(() => {
      console.log("Server is connnected");
    });
  } catch (error) {
    console.log(error);
    console.log("Error in Server");
  }
};
//calling the function
config();
