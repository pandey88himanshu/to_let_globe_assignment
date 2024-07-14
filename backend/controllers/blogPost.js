const Blog = require("../models/blogPostSchema");

const GetBlogByid = async (req, res) => {
  try {
    const { id } = req.params; // Correctly destructure `id` from `req.params`
    console.log(id);

    // Use `findById` to find the blog post by its ID
    const blog = await Blog.findById(id);

    if (!blog) {
      // If no blog is found, return a 404 status with a message
      return res.status(404).json({ message: "Blog not found" });
    }

    // If the blog is found, return a 200 status with the blog data
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    // If there's a server error, return a 500 status with a message
    res.status(500).json({ message: "Error fetching blog post" });
  }
};

const GetBlog = async (req, res) => {
  try {
    const data = await Blog.find({});
    //  console.log(data)
    if (data.length > 0) {
      res.json({ data });
    } else {
      res.status(404).json({ message: "No blog Found" });
    }
  } catch (error) {
    //  console.log(error);
    res.status(500).json("Server error");
  }
};
module.exports = { GetBlogByid, GetBlog };
