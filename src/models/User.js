import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});

User.prototype.addCity = async function (city) {
  return this.addCities([city]);
};

User.prototype.getCity = async function() {
  const cities = await this.getCities();
  return cities;
};

User.prototype.removeCities = async function(city) {
  await this.removeCity(city);
};


export default User;
