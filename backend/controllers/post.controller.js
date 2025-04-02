import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

export const getPosts = asyncHandler(async (req, res) => {
  const { type } = req.query;

  try {
    let posts;

    if (type === "popular") {

      const maxComments = await Post.find().sort({ commentCount: -1 }).limit(1);
      if (maxComments.length === 0) {
        return res.status(404).json({ message: "No posts found" });
      }
      const highestCommentCount = maxComments[0].commentCount;
      posts = await Post.find({ commentCount: highestCommentCount });
    } else {

      posts = await Post.find().sort({ createdAt: -1 }).limit(5);
    }

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
});
