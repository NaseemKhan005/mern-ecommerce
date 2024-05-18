import User from "../models/UserModel.js";
import createError from "../utils/createError.js";

export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true }
    );

    const { password, ...userInfo } = user._doc;

    res.status(200).json({
      message: "User updated successfully",
      user: userInfo,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return next(createError(404, "User not found"));

    const { password, ...userInfo } = user._doc;

    res.status(200).json({
      message: "Single user fetched successfully",
      user: userInfo,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};
