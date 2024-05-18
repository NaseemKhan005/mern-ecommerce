import bcrypt from "bcrypt";

import createError from "../utils/createError.js";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username) return next(createError(400, "Username is required"));
    if (!email) return next(createError(400, "Email is required"));
    if (!password) return next(createError(400, "Password is required"));

    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createError(400, "User already exists"));

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    generateToken(user, res);

    const { password: userPassword, ...userInfo } = user._doc;

    res.status(201).json({
      message: "User registered successfully",
      user: userInfo,
    });
  } catch (error) {
    next(error);
  }
};
