import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="w-full h-[15vh] bg-[#070706] flex items-center text-white">
      <div className="px-8 flex items-center justify-between w-full">
        <div className="w-3/6">
          <img
            src="https://toletglobe.in/static/media/Favicon.3d4cfc7b80e84c79bb5f.png"
            alt="logo"
          />
        </div>
        <div className="w-3/6">
          <ul className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => handleTabChange("home")}
              className={`px-4 py-1 rounded-lg ${
                activeTab === "home" ? "bg-cyan-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleTabChange("about")}
              className={`px-4 py-1 rounded-lg ${
                activeTab === "about" ? "bg-cyan-500" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => handleTabChange("blog")}
              className={`px-4 py-1 rounded-lg ${
                activeTab === "blog" ? "bg-cyan-500" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/addpost"
              onClick={() => handleTabChange("addBlog")}
              className={`px-4 py-1 rounded-lg ${
                activeTab === "addBlog" ? "bg-cyan-500" : ""
              }`}
            >
              Add Post
            </Link>
            <Link to="/login" className="bg-green-500 px-4 py-2 rounded-lg">
              Login
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
