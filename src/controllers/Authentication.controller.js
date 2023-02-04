import { hashPassword, comparePassword } from "../helpers/Bcryp/bcryp.js";
import { User } from "../models/User.js";

export const register = async (req, res) => {
  const { email, name, password } = req.body;
  const encryption = await hashPassword(password);
  try {
    const create = await User.create({ email, name, password: encryption });
    res.send({ message: "User created successfully", data: create });
  } catch (error) {
    res.status(404).send({ message: error.errors[0].message, status: 404 });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  const find = await User.findOne({ where: { email } });
  const compare = await comparePassword(password, find.password);
  try {
    if (compare) {
      res.send({
        message: "login success",
        token: "eyejkjjkjknsssjj233",
      });
    } else {
      throw new Error("invalid credentials");
    }
  } catch (error) {
    res.send({ message: "invalid credentials" });
  }
};
