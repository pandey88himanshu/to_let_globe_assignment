// routes/blogPosts.js
const router = require("express").Router();
const upload = require("../middleware/multer");
const BlogPost = require("../models/blogPostSchema");

// const cloudinary = require("../middleware/cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (filePath) => {
  let attempts = 0;
  const retryDelay = 3000;
  const maxAttempts = 3;
  console.log("Filepath", filePath);
  while (attempts < maxAttempts) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "blog_images",
      });
      console.log("res", result);
      return result.secure_url;
    } catch (error) {
      attempts++;
      if (attempts < maxAttempts) {
        console.error(
          `Attempt ${attempts} failed. Retrying in ${
            retryDelay / 1000
          } seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        throw error;
      }
    }
  }
};

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

const { signUp, logIn } = require("../controllers/user");
const { GetBlog } = require("../controllers/blogPost");
router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/getall", GetBlog);

module.exports = router;
