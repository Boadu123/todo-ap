// import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import { UserModel } from "../models/userModel.js";
import { permissions } from "../utils/rbac.js";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ["HS256"],
});

export const hasPermission = (action) => {
  return async (req, res, next) => {
    try {
      // Find user from database
      const user = await UserModel.findById(req.auth.id);
      // use the user to find their permissions
      const permission = permissions.find(value => value.role === user.role);
      console.log(permission)
      
      if (!permission) {
        return res.status(403).json("No permission found");
      }
      // check if permission actions include actions
      if (permission.actions.includes(action)) {
        next();
      } else {
        res.status(403).json("Action not allowed")
      }
    } catch (error) {
      next(error);
    }
  };
};
// export const isAuthenticated = (req, res, next) => {
//   try {
//     // Get authorization from header
//     const authorization = req.headers.authorization;
//     // Extract token from authorization header
//     const token = authorization.split(" ")[1];
//     // Verify and decode the token
//     const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
//     // Attach user to request
//     req.user = { id: decoded.id };
//     // Hand over request to the next middleware/controller
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
