import express from "express";
import { createNewProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/", createNewProduct);

export default router;
