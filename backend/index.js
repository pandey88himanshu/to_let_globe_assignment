const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const cors = require("cors");
//requiring env file in the project
require("dotenv").config();
//importing router
const router = require("./routes/router");
//enabling cors
app.use(cors());
//enabling json reading
app.use(express.json());
//using url encoder to parse data from form
app.use(express.urlencoded({ extended: false }));
//using port from env
const PORT = process.env.PORT;
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

router.post("/imgupload", upload.single("image"), function (req, res, next) {});
