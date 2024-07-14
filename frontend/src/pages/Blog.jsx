import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate("/readblog", { state: id });
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/v1/getall`
        );
        console.log("API Response:", response.data);

        // Ensure the response data is an array
        if (Array.isArray(response.data.data)) {
          // Access response.data.data here
          setPosts(response.data.data);
        } else {
          console.error("API response data is not an array:", response.data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  console.log("Posts:", posts);
  console.log("Posts type:", typeof posts);
  console.log("First post:", posts[0]);

  const truncateDescription = (description) => {
    if (description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };

  return (
    <div className="bg-[#070706] text-white w-full min-h-[70vh] flex flex-col items-center p-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="w-full max-w-4xl bg-[#1a1a1a] rounded-lg shadow-lg flex my-4"
          >
            {post.image && (
              <div className="w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover h-full w-full rounded-l-lg"
                />
              </div>
            )}
            <div className="w-2/3 p-4">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-400">By {post.author}</p>
              <p className="mt-2">{truncateDescription(post.description)}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={() => {
                  handleClick(post._id);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default Blog;
