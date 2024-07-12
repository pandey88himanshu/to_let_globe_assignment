// routes/blogPosts.js
const router = require("express").Router();
const upload = require("../middleware/multer");
const BlogPost = require("../models/blogPostSchema");
const cloudinary = require("../middleware/cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (filePath) => {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "blog_images",
      });
      return result.secure_url;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw error;
      }
    }
  }
};

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const filePath = req.file ? req.file.path : null;

    let imageUrl = null;

    if (filePath) {
      imageUrl = await uploadToCloudinary(filePath);

      // Delete the temporary file after uploading to Cloudinary
      fs.unlinkSync(filePath);
    }

    const newPost = new BlogPost({
      title,
      author,
      description,
      image: imageUrl,
    });

    await newPost.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Failed to create blog post" });
  }
});


const { signUp, logIn } = require("../controllers/user");
const { GetBlog } = require("../controllers/blogPost");
router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/Blogs",GetBlog);

module.exports = router;
