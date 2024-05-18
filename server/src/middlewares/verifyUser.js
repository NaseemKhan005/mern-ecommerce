import createError from "../utils/createError.js";
import verifyToken from "./verifyToken.js";

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not authorized!"));
    }
  });
};

export default verifyUser;
