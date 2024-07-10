import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/addpost">Add Post</Link>
              <Link to="/login" className="bg-red-500 px-4 py-2">
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
