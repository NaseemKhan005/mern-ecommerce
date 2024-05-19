import Cart from "../models/CartModel.js";

export const createCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.create({ userId: userId, ...req.body });

    res.status(201).json({ message: "Cart created Successfully!", cart: cart });
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const id = req.params.id;

    const cart = await Cart.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Cart updated Successfully!",
      cart: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Cart.findByIdAndDelete(id);

    res.status(200).json({ message: "Cart deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getUserCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findOne({ userId: id });

    res.status(200).json({
      message: "User Cart retrieved Successfully!",
      cart: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res
      .status(200)
      .json({ message: "All Carts retrieved Successfully!", carts: carts });
  } catch (error) {
    next(error);
  }
};
