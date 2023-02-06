import app from "./app.js";
import { sequelize } from "./database/database.js";
import dotenv from "dotenv";
import userRoutes from "./routes/User.routes.js";
import cityRoutes from "./routes/City.routes.js";
import favoritesRoutes from "./routes/Favorites.routes.js";
import authentication from "./routes/Authentication.routes.js";

dotenv.config();

const PORT = process.env.PORT;
app.use(authentication);
app.use(userRoutes);
app.use(cityRoutes);
app.use(favoritesRoutes);

const Main = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

Main();
