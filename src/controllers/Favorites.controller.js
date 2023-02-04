import User from "../models/User.js";
import City from "../models/City.js";
import { createRelations } from "../models/Relations.js";

createRelations();

export const addFavorites = async (req, res) => {
  const { userId, cityId } = req.body;
  const user = await User.findByPk(userId);
  const city = await City.findByPk(cityId);
  try {
    if (!user || !city) {
      return res.status(404).send({ message: "User or city not found" });
    }

    await user.addCity(city);
    res.send({ message: "City added to favorites" });
  } catch (error) {
    console.log({ error }, "error addcity");
    res.status(500).send({ message: "Error adding city to favorites" });
  }
};

export const removeFavorites = async (req, res) => {
  const { userId, cityId } = req.body;

  try {
    const user = await User.findByPk(userId);
    await user.removeCities(cityId);
    res.send({ message: "City removed from favorites" });
  } catch (error) {
    res.status(500).send({ message: "Error removing city from favorites" });
  }
};

export const allFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    const favorites = await user.getCity();

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({
      favorites,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send({ message: "Error fetching favorites" });
  }
};
