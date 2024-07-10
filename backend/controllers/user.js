const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

// Sign-Up
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Try Stronger Password" });
    }

    const user = new User({ name, email, password });
    await user.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in signUp:", error);
    return res.status(500).json({ message: "Error in signup" });
  }
};

// Login
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (isMatched) {
      return res.status(200).json({ message: "User login successful" });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Error during login" });
  }
};

module.exports = { signUp, logIn };
