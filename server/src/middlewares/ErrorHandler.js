import { config } from "../config/config.js";

const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: config.env === "development" ? error.stack : null,
  });

  next();
};

export default errorHandler;
