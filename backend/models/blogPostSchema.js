
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    Title:{
        type:String,
        require:true
    },
    Author:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
});
const blogschema =  new mongoose.model("Blogs", BlogSchema);
module.exports ={blogschema}