const User = require("../models/userSchema"); // Adjust the import based on your file structure
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const KEY = process.env.JWT_SECRET_KEY;

// Sign-Up
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save the user to the database
    const userCreated = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Create a Response object to send back to the client with sensitive data excluded
    const responseUser = {
      _id: userCreated._id,
      email: email,
      name: name,
    };

    // Generate an access token for the newly created user
    const accessToken = jwt.sign({ _id: userCreated._id }, KEY, {
      // expiresIn: 3600, // Expires in 1 hour
    });

    // Send the response back to the client
    res.status(201).json({
      message: "Successfully signed up",
      user: responseUser,
      access_token: accessToken,
      token_type: "Bearer",
      // expiresIn: 3600,
    });
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
    // console.log(existingUser);
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatched = bcrypt.compare(password, existingUser.password);
    console.log(isMatched);
    if (isMatched) {
      // Generate an access token for the user
      const accessToken = jwt.sign({ _id: existingUser._id }, KEY, {
        // expiresIn: "1d",
      });

      // Send the response back to the client
      return res.status(200).json({
        message: "Login successful",
        user: {
          _id: existingUser._id,
          email: email,
          role: existingUser.role, // Include role if applicable
        },
        access_token: accessToken,
        token_type: "Bearer",
        // expiresIn: "33d", // Consistent data type
      });
    } else {
      // Log the mismatch for debugging purposes
      console.log("Password mismatch for user:", email);
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Error during login" });
  }
};

const getData = async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Access token is missing" });
    }

    // Verify the token and extract the user ID
    const decoded = jwt.verify(token, KEY, { ignoreExpiration: true });
    const userId = decoded._id;

    // Fetch the user data from the database
    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user data back to the client
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error in getData:", error);
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

module.exports = { signUp, logIn, getData };
