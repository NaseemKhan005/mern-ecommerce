import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { createCart } from "../controllers/cartController.js";
const router = express.Router();

router.post("/", verifyUser, createCart);

export default router;
