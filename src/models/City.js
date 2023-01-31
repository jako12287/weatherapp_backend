import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Forecast } from "./Forecast";
import { User } from "./User";

export const City = sequelize.define("cities", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.STRING,
  },
  lng: {
    type: DataTypes.STRING,
  },
});

City.belongsToMany(User, { through: "user_city" });
City.belongsToMany(Forecast, { through: "city_forecast" });
