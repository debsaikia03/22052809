import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel.js";

export const getComments = asyncHandler(async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json(
        {
            message: "Error fetching comments", 
            error: error.message 
        });
  }
});
