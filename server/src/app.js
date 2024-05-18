import express from "express";

import authRoute from "./routes/authRoute.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);

// Handling Errors
app.use(ErrorHandler);

export default app;
