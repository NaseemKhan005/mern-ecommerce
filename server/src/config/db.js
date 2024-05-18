import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose
      .connect(config.mongoUri)
      .then(() => console.log("Successfully connected to MongoDB."))
      .catch((error) =>
        console.log(`Error occurs while connecting to MongoDB: ${error}`)
      );
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
