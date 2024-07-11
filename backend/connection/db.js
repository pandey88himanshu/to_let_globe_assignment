const mongoose = require("mongoose");
//enabling .env file config
require("dotenv").config();

//creating config function
const config = async () => {
  try {
    await mongoose.connect(process.env.DB, {});
    console.log("Server is connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

//calling the function
config();
