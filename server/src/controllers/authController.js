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

    if (existingUser.username === username)
      return next(createError(400, "Username already exists"));

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

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) return next(createError(400, "Email is required"));
    if (!password) return next(createError(400, "Password is required"));

    const user = await User.findOne({ email });
    if (!user) return next(createError(400, "Wrong Credentials"));

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "Wrong Credentials"));

    generateToken(user, res);
    const { password: userPassword, ...userInfo } = user._doc;

    res.status(200).json({
      message: "User logged in successfully",
      user: userInfo,
    });
  } catch (error) {
    next(error);
  }
};
