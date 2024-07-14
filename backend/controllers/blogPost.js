const Blog = require("../models/blogPostSchema");

const GetBlogByid =async (req, res) => {
 try {
   // console.log(req.params.id)
   const {id } = req.params.id;
 
   const blog = await Blog.findOne({id});
   res.status(201).json({blog});
 } catch (error) {
  res.status(404).json({message:"Blog Does Not found"})
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
