import getDataApi from "../Axios/getApi.js";
import { City } from "../models/City.js";

const findOrCreateCity = async (data) => {
  try {
    const {
      id,
      name,
      sys: { country },
      coord: { lon, lat },
    } = data;

    const [city, created] = await City.findOrCreate({
      where: { id },
      defaults: { name, country, lon, lat },
    });

    console.log(created ? "Ciudad creada" : "Ciudad encontrada");
    return city;
  } catch (error) {
    console.log(error);
  }
};

export const getCity = async (req, res) => {
  try {
    const { namecity } = req.query;
    const data = await getDataApi(namecity);
    await findOrCreateCity(data.current);

    res.send({ message: "status 200, success", data });
  } catch (error) {
    console.log(error);
  }
};
