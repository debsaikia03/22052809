import express from "express";
import { getTopUsers } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getTopUsers); // Protects the route

export default router;
