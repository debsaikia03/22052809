import express from "express";
import { getComments } from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getComments); // Protects the route

export default router;
