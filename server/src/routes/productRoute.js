import express from "express";
import { createNewProduct } from "../controllers/productController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const router = express.Router();

router.post("/", verifyAdmin, createNewProduct);

export default router;
