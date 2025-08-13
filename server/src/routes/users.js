import express from "express";
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

  // Create and save the new user
  const newUser = new UserModel({ username, password });
  await newUser.save();

  res.json({ message: "User registered successfully!" });
});

export { router as userRouter };