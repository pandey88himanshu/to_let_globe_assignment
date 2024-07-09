const express = require("express");
const app = express();
//requiring env file in the project
require("dotenv").config();
//enabling json reading
app.use(express.json());
//connecting the database from the db.js
require("./connection/db");
//server page
app.use("/", (req, res) => {
  res.send("Hello From Server Side");
});
//enabling port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
