import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
};
