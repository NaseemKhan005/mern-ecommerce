export const createNewProduct = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Product created Successfully!" });
  } catch (error) {
    next(error);
  }
};
