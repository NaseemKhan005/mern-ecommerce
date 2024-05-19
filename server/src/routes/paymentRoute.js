import express from "express";
import { chargePayment } from "../controllers/paymentController.js";
const router = express.Router();

router.post("/stripe", chargePayment);

export default router;
