import express from "express";
import { getPosts } from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getPosts); // Protects the route

export default router;
