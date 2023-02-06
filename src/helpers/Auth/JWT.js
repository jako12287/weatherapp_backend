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

export const generateTokenGuest = () => {
  const payload = {
    role: 'guest',
  };

  const options = {
    expiresIn: "1m",
  };

  return jwt.sign(payload, process.env.SECRET, options);
};