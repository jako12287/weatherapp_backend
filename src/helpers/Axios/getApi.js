import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getUpComing = async (id) => {
  try {
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.KEY_API}&units=metric&lang=sp`;
    const { data: forecastData } = await axios.get(forecastApiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return forecastData;
  } catch (error) {
    console.log(error);
  }
};

const getDataApi = async (city) => {
  try {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY_API}&units=metric&lang=sp`;

    const { data } = await axios.get(weatherApiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!data) {
      throw new Error("No se pudo obtener datos de la API");
    }

    const { id } = data;
    const forecastData = await getUpComing(id);

    return { current: data, upcoming: forecastData };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "Ciudad no encontrada";
    } else {
      console.error(error);
    }
  }
};

export default getDataApi;
