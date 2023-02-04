import User from "../models/User.js";

export const getAllUser = async (req, res) => {
  try {
    const get = await User.findAll();
    res.send({ message: "All users", data: get });
  } catch (error) {
    res.status(404).send(error.errors[0].message);
    console.log(error);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const get = await User.findOne({ where: { id } });
    res.send({ message: "user by id", data: get });
  } catch (error) {
    res.status(404).send({ message: error.name, status: 404 });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  try {
    const update = await User.update({ email, name }, { where: { id } });
    res.send({ message: "Update user successfully", data: update });
  } catch (error) {
    res.status(404).send({ message: error.name, status: 404 });
  }
};

export const destroyUser = async (req, res) => {
  const { id } = req.params;
  try {
    const destroy = await User.destroy({ where: { id } });
    res.send({ message: "Delete user successfully", data: destroy });
  } catch (error) {
    res.status(404).send({ message: error.name, status: 404 });
  }
};
