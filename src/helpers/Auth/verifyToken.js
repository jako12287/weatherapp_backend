import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// export const verifyToken = (req, res, next) => {
//   const token = req.headers["x-access-token"];
//   if (!token) {
//     return res.status(401).json({
//       message: "Unauthorized access",
//     });
//   }

//   try {
//     const decode = jwt.verify(token, process.env.SECRET);
//     req.user = decode;
//     next();
//   } catch (error) {
//     return res.status(400).json({
//       message: "Invalid token",
//     });
//   }
// };

export const checkRole = (roles) => {
  return (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Forbidden",
        });
      }
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
  };
};