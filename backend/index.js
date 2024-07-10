const express = require("express");
const app = express();
const cors = require("cors");
//requiring env file in the project
require("dotenv").config();
//importing router
const router = require("./routes/router");
//enabling cors
app.use(cors());
//enabling json reading
app.use(express.json());
const PORT =process.env.PORT ||8000
//connecting the database from the db.js
require("./connection/db");
//middleware api
app.use("/api/v1", router);
//server page
app.use("/", (req, res) => {
  res.send("Hello From Server Side");
});
//enabling port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
