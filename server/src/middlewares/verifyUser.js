import verifyToken from "./verifyToken.js";

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(handleError(403, "You are not authorized!"));
    }
  });
};

export default verifyUser;
