import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { City } from "./City.js";
export const Forecast = sequelize.define("forecasts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  temp: {
    type: DataTypes.FLOAT,
  },
  humidity: {
    type: DataTypes.FLOAT,
  },
  wind_speed: {
    type: DataTypes.FLOAT,
  },
  wind_direction: {
    type: DataTypes.FLOAT,
  },
  wind_condition: {
    type: DataTypes.STRING,
  },
});

Forecast.belongsToMany(City, { through: "city_forecast" });
