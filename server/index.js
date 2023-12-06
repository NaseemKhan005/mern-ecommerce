const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("MongoDB connection Successfull!!!"))
	.catch((error) => console.log("MongoDB connection Error: " + error));

app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, () => console.log("Server is Running..."));
