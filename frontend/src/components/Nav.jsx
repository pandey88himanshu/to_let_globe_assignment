import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [blog, setBlog] = useState(false);
  const [addBlog, setAddBlog] = useState(false);
  function handleHome() {
    setHome(true);
    setAbout(false);
    setBlog(false);
    setAddBlog(false);
  }
  function handleAbout() {
    setHome(false);
    setAbout(true);
    setBlog(false);
    setAddBlog(false);
  }
  function handleBlog() {
    setHome(false);
    setAbout(false);
    setBlog(true);
    setAddBlog(false);
  }
  function handleAddBlog() {
    setHome(false);
    setAbout(false);
    setBlog(false);
    setAddBlog(true);
  }
  return (
    <>
      <div className="w-full h-[15vh] bg-[#070706] flex items-center  text-white">
        <div className=" px-8 flex items-center justify-between w-full">
          <div className="w-3/6">
            <img
              src="https://toletglobe.in/static/media/Favicon.3d4cfc7b80e84c79bb5f.png"
              alt="logo"
            />
          </div>
          <div className="w-3/6">
            <ul className=" flex items-center justify-between">
              <Link
                to="/"
                onClick={handleHome}
                className={`bg-${home ? "cyan" : ""}-500 px-4 py-1 rounded-lg`}
              >
                Home
              </Link>
              <Link
                onClick={handleAbout}
                to="/about"
                className={`bg-${about ? "cyan" : ""}-500 px-4 py-1 rounded-lg`}
              >
                About
              </Link>
              <Link
                to="/blog"
                onClick={handleBlog}
                className={`bg-${blog ? "cyan" : ""}-500 px-4 py-1 rounded-lg`}
              >
                Blog
              </Link>
              <Link
                to="/addpost"
                onClick={handleAddBlog}
                className={`bg-${
                  addBlog ? "cyan" : ""
                }-500 px-4 py-1 rounded-lg`}
              >
                Add Post
              </Link>
              <Link to="/login" className="bg-green-500 px-4 py-2">
                Login
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
