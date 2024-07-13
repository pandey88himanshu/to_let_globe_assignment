// routes/blogPosts.js
const router = require("express").Router();
const upload = require("../middleware/multer");
const BlogPost = require("../models/blogPostSchema");

// const cloudinary = require("../middleware/cloudinary");
const fs = require("fs");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, author, description, image } = req.body;
    const filePath = req.file ? req.file.path : null;

    let imageUrl = null;
    console.log("Called");
    // if (filePath) {
    //   imageUrl = await uploadToCloudinary(filePath);

    //   // Delete the temporary file after uploading to Cloudinary
    //   fs.unlinkSync(filePath);
    // }
    console.log("ImageUrl", imageUrl);
    const newPost = new BlogPost({
      title,
      author,
      description,
      image: image,
    });
    console.log("newpost", newPost);
    await newPost.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

const { signUp, logIn, getData } = require("../controllers/user");
const { GetBlog } = require("../controllers/blogPost");
router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/getdata", getData);
router.get("/getall", GetBlog);

module.exports = router;
