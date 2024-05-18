export const updateUser = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
