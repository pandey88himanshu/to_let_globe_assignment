// PostForm.jsx

import React, { useState, useRef } from "react";
import axios from "axios";
import RichTextEditor from "./RichTextEditor";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { analytics } from "../pages/Firebase";
import { toast } from "react-toastify";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Values:", { title, author, content, image });

    try {
      // Upload image to Firebase storage
      const imagesRef = ref(analytics, `blog/${image.name}`);
      await uploadBytes(imagesRef, image);

      // Get the URL of the uploaded image
      const url = await getDownloadURL(imagesRef);
      console.log("Image URL:", url);

      // Create a FormData object to send data to the backend
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("description", content);
      formData.append("image", url);

      console.log("Form Data:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Send the form data to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/v1/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Post created:", response.data);
      toast.success("Created Succesfully");

      // Optionally reset form fields after successful submission
      setTitle("");
      setAuthor("");
      setContent("");
      setImage(null);
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleReset = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setImage(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full h-[70vh] text-white bg-[#070706] flex justify-center">
      <div>
        <div className="text-center">
          <p>Add Post</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-start flex-col">
            <label htmlFor="title">Enter Post Title</label>
            <input
              className="w-[60vw] text-black outline-none"
              type="text"
              placeholder="Enter Here"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="author">Enter Post Author</label>
            <input
              className="w-[60vw] text-black outline-none"
              type="text"
              placeholder="Enter Here"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="description">Enter Post Description</label>
            <RichTextEditor value={content} onChange={handleContentChange} />
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="image">Choose Your Image</label>
            <input
              type="file"
              id="image"
              className="w-[60vw] bg-white text-black"
              onChange={handleImageChange}
              ref={imageInputRef}
            />
          </div>
          <div className="flex gap-4">
            <button type="submit" className="px-6 py-2 bg-green-500 text-white">
              Create Post
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-red-500 text-white"
              onClick={handleReset}
            >
              Reset Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
