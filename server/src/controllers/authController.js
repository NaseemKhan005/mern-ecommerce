import createError from "../utils/createError.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username) return next(createError(400, "Username is required"));
    if (!email) return next(createError(400, "Email is required"));
    if (!password) return next(createError(400, "Password is required"));

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
