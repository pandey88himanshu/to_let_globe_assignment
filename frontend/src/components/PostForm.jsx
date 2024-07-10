import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";
const PostForm = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };
  return (
    <>
      <div className="w-full h-[70vh] text-white bg-[#070706] flex justify-center">
        <div>
          <div className=" text-center">
            <p>Add Post</p>
          </div>
          <form action="" className=" flex flex-col gap-6">
            <div className="flex items-start flex-col">
              <label htmlFor="title">Enter Post Title</label>
              <input
                className="w-[60vw]"
                type="text"
                placeholder="Enter Here"
                name="title"
                id="title"
              />
            </div>
            <div className=" flex flex-col gap-6">
              <label htmlFor="author">Enter Post Author</label>
              <input
                className="w-[60vw]"
                type="text"
                placeholder="Enter Here"
                name="author"
                id="author"
              />
            </div>
            <div className=" flex flex-col gap-6">
              <label htmlFor="description">Enter Post Description</label>
              <RichTextEditor value={content} onChange={handleContentChange} />
            </div>
            <div className=" flex flex-col gap-6">
              <label htmlFor="image">Choose Your Image</label>
              <input
                type="file"
                id="image"
                className="w-[60vw] bg-white text-black"
              />
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-green-500 text-white ">
                Create Post
              </button>
              <button className="px-6 py-2 bg-red-500 text-white ">
                Reset Content
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
