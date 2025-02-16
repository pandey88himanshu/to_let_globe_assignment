// routes/blogPosts.js
const router = require("express").Router();
const upload = require("../middleware/multer");
const BlogPost = require("../models/blogPostSchema");
const fs = require("fs");

router.post("/create", upload.single("image"), async (req, res) => {
  console.log(req.body);
  try {
    const { title, author, description, image } = req.body;
    const filePath = req.file ? req.file.path : null;

    let imageUrl = null;
    console.log("Called");
    console.log("ImageUrl", imageUrl);
    const newPost = new BlogPost({
      title,
      author,
      description,
      image: image,
    });
    // console.log("newpost", newPost);
    await newPost.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

const { signUp, logIn, getData } = require("../controllers/user");
const { GetBlog, GetBlogByid } = require("../controllers/blogPost");
router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/getdata", getData);
router.get("/getall", GetBlog);
router.get("/blog/:id", GetBlogByid);

module.exports = router;
