import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "", // Ensure this matches the schema
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  function submitHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Submit Handler Called"); // Log to check if function is being called

    if (!details.name || !details.email || !details.password) {
      toast.error("Fill Details to submit");
    } else {
      // console.log("Details are complete, making API request"); // Log before making the request
      if (!emailRegex.test(details.email)) {
        toast.error("Invalid email");
      } else {
       axios
        .post(`http://localhost:3001/api/v1/signup`, details)
        .then((res) => {
          // console.log("API request successful:", res); // Log the response
      
          toast.success(res.data.message);
          localStorage.setItem("access_token", response.data.access_token);
         
        })
        .catch((error) => {
          toast.error(error.response.data.message)
          console.error("API request failed:", error); // Log any errors
        });
      }
    }
  }

  return (
    <>
      <div className="w-full h-[70vh]">
        <div className=" bg-[#070706] text-white px-8 w-full h-full flex justify-center items-center">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col ">
              <label htmlFor="name">Enter Name</label>
              <input
                className="text-black w-[50vw] py-1 border-none outline-none"
                type="text"
                onChange={handleChange}
                name="name"
                value={details.name}
              />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="email">Enter Email</label>
              <input
                className="text-black w-[50vw] py-1 border-none outline-none"
                type="email"
                onChange={handleChange}
                name="email"
                value={details.email}
              />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="password">Enter Password</label>
              <input
                className="text-black w-[50vw] py-1 border-none outline-none"
                type="password"
                onChange={handleChange}
                name="password"
                value={details.password}
              />
            </div>
            <div className="flex items-center justify-between py-4">
              <button
                className="px-4 py-2 bg-green-500 text-white"
                type="submit"
              >
                Sign Up
              </button>
              <div className="text-blue-500">
                <Link to="/login">Log In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
