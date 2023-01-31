import { User } from "../models/User.js";

export const getAllUser = async (req, res) => {
  const get = await User.findAll();
  res.send({ message: "All users", data: get });
};
