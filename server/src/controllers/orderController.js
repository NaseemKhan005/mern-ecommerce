import Order from "../models/OrderModel.js";

export const createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      message: "Order created Successfully!",
      order: order,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Order updated Successfully!",
      order: updatedOrder,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.findByIdAndDelete(id);

    res.status(200).json({ message: "Order deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getUserOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await Order.find({ userId: id });

    res.status(200).json({
      message: "User Order retrieved Successfully!",
      order: order,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      message: "All Orders retrieved Successfully!",
      orders: orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderStats = async (req, res, next) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    // get monthly income
    const stats = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json({
      message: "Order Stats retrieved Successfully!",
      stats: stats,
    });
  } catch (error) {
    next(error);
  }
};
