import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const City = sequelize.define("City", {
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

export default City;
