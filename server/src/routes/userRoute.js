import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} from "../controllers/userController.js";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/user/:id", verifyAdmin, getSingleUser);
router.get("/", verifyAdmin, getAllUsers);

export default router;
