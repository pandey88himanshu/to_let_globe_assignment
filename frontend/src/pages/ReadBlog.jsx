import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ReadBlog = () => {
  const [post, setPost] = useState(null);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_APP_URL}/api/v1/blog/${id}`)
        .then((res) => {
          setPost(res.data);
          console.log("Fetched post:", res.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#070706] text-white w-full min-h-[70vh] flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-400">By {post.author}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-w-4xl my-4"
      />
      <p className="mt-2">{post.description}</p>
    </div>
  );
};

export default ReadBlog;
