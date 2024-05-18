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
