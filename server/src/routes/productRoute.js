import express from "express";
import {
  createNewProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
} from "../controllers/productController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const router = express.Router();

router.post("/", verifyAdmin, createNewProduct);
router.put("/:id", verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);
router.get("/product/:id", getSingleProduct);
router.get("/", getAllProducts);

export default router;
