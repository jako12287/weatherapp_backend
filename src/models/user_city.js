import { User } from "./User.js";
import { City } from "./City.js";

User.belongsToMany(City, { through: "user_city" });
City.belongsToMany(User, { through: "user_city" });
