import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (user) => {
  const payload = {
    subject: user.id,
    email: user.email,
    role: user.role,
  };

  const options = {
    expiresIn: "72h",
  };

  return jwt.sign(payload, process.env.SECRET, options);
};
