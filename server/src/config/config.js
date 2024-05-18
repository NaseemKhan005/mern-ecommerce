import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV,
  mongoUri: process.env.MONGO_URL,
};

export const config = Object.freeze(_config);
