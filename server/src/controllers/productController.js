import Product from "../models/ProductModel.js";

export const createNewProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res
      .status(201)
      .json({ message: "Product created Successfully!", product: product });
  } catch (error) {
    next(error);
  }
};
