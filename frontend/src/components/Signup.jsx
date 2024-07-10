import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  function submitHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Submit Handler Called"); // Log to check if function is being called

    if (!details.name || !details.email || !details.password) {
      alert("Fill Details to submit");
    } else {
      console.log("Details are complete, making API request"); // Log before making the request

      axios
        .post(`${import.meta.env.VITE_APP_URL}/api/v1/signup`, details)
        .then((res) => {
          console.log("API request successful:", res); // Log the response

          if (res.status === 200) {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("API request failed:", error); // Log any errors
        });
    }
  }

  return (
    <>
      {console.log(details)}
      <div>
        <div className="bg-[#070706] text-white">
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="name">Enter Name</label>
              <input
                className="text-black"
                type="text"
                onChange={handleChange}
                name="name"
                value={details.name}
              />
            </div>
            <div>
              <label htmlFor="email">Enter Email</label>
              <input
                className="text-black"
                type="email"
                onChange={handleChange}
                name="email"
                value={details.email}
              />
            </div>
            <div>
              <label htmlFor="password">Enter Password</label>
              <input
                className="text-black"
                type="password"
                onChange={handleChange}
                name="password"
                value={details.password}
              />
            </div>
            <div>
              <button
                className="px-4 py-2 bg-green-500 text-white"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div>
              <Link to="/login">Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
