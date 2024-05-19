import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
} from "../controllers/cartController.js";
const router = express.Router();

router.post("/", verifyUser, createCart);
router.put("/:id", verifyUser, updateCart);
router.put("/:id", verifyUser, deleteCart);
router.get("/find/:id", verifyUser, getUserCart);
router.get("/", verifyAdmin, getAllCarts);

export default router;
