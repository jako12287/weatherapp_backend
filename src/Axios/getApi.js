import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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
    
      console.log("datos de la API", data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Ciudad no encontrada");
      } else {
        console.error(error);
      }
    }
  };
  

export default getDataApi;
