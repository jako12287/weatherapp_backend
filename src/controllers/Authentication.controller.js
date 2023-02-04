import { generateToken } from "../helpers/Auth/JWT.js";
import { hashPassword, comparePassword } from "../helpers/Bcryp/bcryp.js";
import  User  from "../models/User.js";

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
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).send({ message: "Invalid credentials" });

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch)
      return res.status(400).send({ message: "Invalid credentials" });

    const token = generateToken(user);
    return res.status(200).send({
      message: "Login success",
      token,
      user: {
        email: user.email,
        id: user.id,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};
