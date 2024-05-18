import express from "express";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import errorHandler from "./middlewares/ErrorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// Handling Errors
app.use(errorHandler);

export default app;
