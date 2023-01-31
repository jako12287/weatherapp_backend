import { app } from "./app.js";
import { sequelize } from "./database/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const Main = async () => {
  try {
    await sequelize.authenticate();
    console.log("success conection");
    await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
  } catch (error) {
    console.log("failed conection");
    console.log(error);
  }
};

Main();
