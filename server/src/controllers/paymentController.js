export const chargePayment = async (req, res, next) => {
  try {
    const { token, amount } = req.body;

    await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "usd",
        source: token.id,
        description: "Payment for the order",
      },
      (stripeError, stripeResponse) => {
        if (stripeError) {
          return res.status(500).json({
            message: "Payment failed",
            error: stripeError,
          });
        } else {
          return res.status(200).json({
            message: "Payment is successful",
            stripeResponse,
          });
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
