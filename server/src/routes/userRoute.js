import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getStats,
} from "../controllers/userController.js";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/user/:id", verifyAdmin, getSingleUser);
router.get("/", verifyAdmin, getAllUsers);
router.get("/stats", verifyAdmin, getStats);

export default router;
