import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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
