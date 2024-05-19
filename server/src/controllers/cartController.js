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
