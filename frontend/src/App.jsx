import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Signup from "./components/Signup";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
