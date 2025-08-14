import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

const router = express.Router();

// Define the registration endpoint
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the new user
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User registered successfully!" });
});

// Login endpoint
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  
    // Compare the provided password with the hashed password in the DB
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  
    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
    res.json({ token, userID: user._id });
  });

export { router as userRouter };