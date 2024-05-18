export const registerUser = async (req, res) => {
  try {
    res.status(200).json("Register User");
  } catch (error) {
    console.log(error);
  }
};
