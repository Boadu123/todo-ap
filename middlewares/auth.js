// import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["HS256"]
});

// export const isAuthenticated = (req, res, next) => {
//   try {
//     // Get authorization from header
//     const authorization = req.headers.authorization;
//     console.log(authorization)
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

