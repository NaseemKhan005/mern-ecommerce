import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

const generateToken = (user, res) => {
  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    config.jwtSecret,
    {
      expiresIn: "30d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: config.env !== "development",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;
