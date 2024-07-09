import React from "react";

const PostForm = () => {
  return (
    <>
      <div>
        <div>
          <form action="">
            <label htmlFor="title">Enter Post Title</label>
            <input
              type="text"
              placeholder="Enter Here"
              name="title"
              id="title"
            />
            <label htmlFor="author">Enter Post Author</label>
            <input
              type="text"
              placeholder="Enter Here"
              name="author"
              id="author"
            />
            <label htmlFor="description">Enter Post Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter Here"
            />
            <label htmlFor="image">Choose Your Image</label>
            <input type="file" id="image" />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
