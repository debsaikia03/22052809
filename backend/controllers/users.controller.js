import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const getTopUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().sort({ postCount: -1 }).limit(5);
    res.json(users);
  } catch (error) {
    res.status(500).json({ 
        message: "Error fetching users", 
        error: error.message 
    });
  }
});
