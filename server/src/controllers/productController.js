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

    res.status(200).json({
      message: "Product updated Successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: "Product deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    res.status(200).json({
      message: "Product fetched Successfully!",
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    const products = qNew
      ? await Product.find().sort({ createdAt: -1 }).limit(5)
      : qCategory
      ? await Product.find({ categories: { $in: qCategory } })
      : await Product.find();

    res.status(200).json({
      message: "Products fetched Successfully!",
      products: products,
    });
  } catch (error) {
    next(error);
  }
};
