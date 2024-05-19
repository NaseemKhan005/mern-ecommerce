import express from "express";
import { createNewProduct,updateProduct } from "../controllers/productController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const router = express.Router();

router.post("/", verifyAdmin, createNewProduct);
router.put("/:id", verifyAdmin, updateProduct);

export default router;
