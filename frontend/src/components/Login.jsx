import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  }

  function submitHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Submit Handler Called"); // Log to check if function is being called

    if (!details.email || !details.password) {
      alert("Fill Details to submit");
    } else {
      console.log("Details are complete, making API request"); // Log before making the request

      axios
        .post(`${import.meta.env.VITE_APP_URL}/api/v1/login`, details)
        .then((res) => {
          console.log("API request successful:", res); // Log the response

          if (res.status === 200) {
            navigate("/blog");
          }
        })
        .catch((error) => {
          console.error("API request failed:", error); // Log any errors
        });
    }
  }
  return (
    <>
      <div className="w-full h-[70vh] ">
        <div className=" bg-[#070706] text-white px-8 w-full h-full flex justify-center items-center">
          <form action="">
            <div className="flex flex-col ">
              <label>Enter Your Email</label>
              <input
                className="text-black w-[50vw] py-1 border-none outline-none"
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-6 ">
              <label>Enter Your Password</label>
              <input
                className="text-black w-[50vw] py-1 border-none outline-none"
                type="password"
                name="password"
                value={details.password}
                onChange={handleChange}
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
    </>
  );
};

export default Login;
