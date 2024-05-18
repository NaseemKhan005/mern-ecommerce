import createError from "../utils/createError.js";
import verifyToken from "./verifyToken.js";

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not authorized!"));
    }
  });
};

export default verifyAdmin;
