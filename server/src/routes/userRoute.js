import express from "express";
import { updateUser, deleteUser } from "../controllers/userController.js";
import verifyUser from "../middlewares/verifyUser.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
