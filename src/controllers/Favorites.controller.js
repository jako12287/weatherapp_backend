import { User } from "../models/User.js";
import { City } from "../models/City.js";

export const addFavorites = async (req, res) => {
  const { userId, cityId } = req.params;
  try {
    const user = await User.findByPk(userId);
    const city = await City.findByPk(cityId);

    if (!user || !city) {
      return res.status(404).send({ message: "User or city not found" });
    }

    await user.addCity(city);
    res.send({ message: "City added to favorites" });
  } catch (error) {
    res.status(500).send({ message: "Error adding city to favorites" });
  }
};

export const removeFavorites = async () => {
  const { userId, cityId } = req.params;

  try {
    const user = await User.findByPk(userId);
    const city = await City.findByPk(cityId);

    if (!user || !city) {
      return res.status(404).send({ message: "User or city not found" });
    }

    await user.removeCity(city);
    res.send({ message: "City removed from favorites" });
  } catch (error) {
    res.status(500).send({ message: "Error removing city from favorites" });
  }
};


