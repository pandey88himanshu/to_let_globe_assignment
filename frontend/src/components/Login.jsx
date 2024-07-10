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
      <div>
        <div className=" bg-[#070706] text-white">
          <form action="">
            <div>
              <label>Enter Your Email</label>
              <input
                className="text-black"
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Enter Your Password</label>
              <input
                className="text-black"
                type="password"
                name="password"
                value={details.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="px-4 py-2 bg-green-500 text-white"
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
