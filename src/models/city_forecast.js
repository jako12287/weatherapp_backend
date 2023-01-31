import { City } from "./City.js";
import { Forecast } from "./Forecast.js";

City.belongsToMany(Forecast, { through: "city_forecast" });
Forecast.belongsToMany(City, { through: "city_forecast" });
