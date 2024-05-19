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

export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true,
      }
    );

    res
      .status(200)
      .json({
        message: "Product updated Successfully!",
        product: updatedProduct,
      });
  } catch (error) {
    next(error);
  }
};