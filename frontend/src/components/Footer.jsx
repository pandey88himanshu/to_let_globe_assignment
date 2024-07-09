import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[15vh] bg-[#070706] text-white flex items-center justify-between">
        <div className="px-8 flex items-center justify-between w-full">
          <div>
            <ul className="flex items-center flex-col">
              <Link to="/">Home</Link>
              <Link to="/">Project</Link>
              <Link to="/">Contact</Link>
            </ul>
          </div>
          <div>
            <ul className="flex items-center flex-col">
              <Link to="/">Services</Link>
              <Link to="/">FAQ's</Link>
              <Link to="/">Testimonial</Link>
            </ul>
          </div>
          <div>
            <ul className="flex items-center flex-col">
              <Link to="/">Email</Link>
              <Link to="/">LinkdIn</Link>
            </ul>
          </div>
          <div>
            <ul className="flex items-center flex-col">
              <Link to="/">Signup To Our Newsletter</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
