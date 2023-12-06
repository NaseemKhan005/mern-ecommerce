const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("MongoDB connection successfull!!!"))
	.catch((err) => console.log("Couldn't connect to Mongo DB" + err));

app.listen(PORT, () => console.log(`Server is Running at port ${PORT}`));
