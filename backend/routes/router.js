const router = require("express").Router();

const upload = require("../middleware/multer"); // Adjust the path to your multer setup

const BlogPost = require("../models/blogPostSchema");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const imagePath = req.file ? req.file.path : null; // Assuming multer saves file path

    const newPost = new BlogPost({
      title,
      author,
      description,
      image: imagePath, // Save the image path in the schema
    });

    await newPost.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

const { signUp, logIn } = require("../controllers/user");
router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
