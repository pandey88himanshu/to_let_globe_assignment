import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!details.email || !details.password) {
      toast.error("Fill all fields");
      return;
    }

    if (!emailRegex.test(details.email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/v1/login`,
        details
      );

      toast.success(response.data.message);
      localStorage.setItem("access_token", response.data.access_token);

      if (response.status === 200) {
        navigate("/blog"); // Redirect to blog page on successful login
      }
    } catch (error) {
      console.error("API request failed:", error.response || error);

      if (error.response) {
        toast.error(error.response.data.message);
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      } else {
        toast.error(
          "Failed to login. Please check your credentials and try again."
        );
      }
    }
  };

  return (
    <div className="w-full h-[70vh]">
      <div className="bg-[#070706] text-white px-8 w-full h-full flex justify-center items-center">
        <form>
          <div className="flex flex-col">
            <label>Enter Your Email</label>
            <input
              type="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              className="text-black w-[50vw] py-1 border-none outline-none"
            />
          </div>
          <div className="flex flex-col py-6">
            <label>Enter Your Password</label>
            <input
              type="password"
              name="password"
              value={details.password}
              onChange={handleChange}
              className="text-black w-[50vw] py-1 border-none outline-none"
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <button
              className="px-4 py-2 bg-green-500 text-white"
              onClick={submitHandler}
            >
              Login
            </button>
            <div className="text-blue-500">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
