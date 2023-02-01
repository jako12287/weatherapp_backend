import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const City = sequelize.define("cities", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  lat: {
    type: DataTypes.STRING,
  },
  lon: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
