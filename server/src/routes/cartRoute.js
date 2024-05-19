import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { createCart,updateCart } from "../controllers/cartController.js";
const router = express.Router();

router.post("/", verifyUser, createCart);
router.put("/:id", verifyUser, updateCart);

export default router;
