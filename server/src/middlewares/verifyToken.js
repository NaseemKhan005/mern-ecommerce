import jwt from "jsonwebtoken";

import { config } from "../config/config.js";
import createError from "../utils/createError.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return next(createError(403, "You are not authenticated!"));

    jwt.verify(token, config.jwtSecret, (error, user) => {
      if (error) return next(createError(401, "Token is not valid!"));

      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
