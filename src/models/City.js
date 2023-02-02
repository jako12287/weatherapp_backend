import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const City = sequelize.define("cities", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  lat: {
    type: DataTypes.FLOAT,
  },
  lon: {
    type: DataTypes.FLOAT,
  },
  name: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
});
