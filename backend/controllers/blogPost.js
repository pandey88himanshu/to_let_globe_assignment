const Blog = require("../models/blogPostSchema");

const PostBlog = (req, res) => {};
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
module.exports = { PostBlog, GetBlog };
