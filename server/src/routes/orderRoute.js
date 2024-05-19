import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  getOrderStats,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/", verifyUser, createOrder);
router.put("/:id", verifyAdmin, updateOrder);
router.delete("/:id", verifyAdmin, deleteOrder);
router.get("/find/:id", verifyUser, getUserOrder);
router.get("/", verifyAdmin, getAllOrders);
router.get("/stats", verifyAdmin, getOrderStats);

export default router;
