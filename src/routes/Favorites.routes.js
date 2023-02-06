import { Router } from "express";
// import { verifyToken } from "../helpers/Auth/verifyToken.js";
import { checkRole } from "../helpers/Auth/verifyToken.js";
import {
  addFavorites,
  removeFavorites,
  allFavorites,
} from "../controllers/Favorites.controller.js";

const router = Router();

router.get("/favorites/:userId", checkRole(["user"]), allFavorites);
router.post("/favorites", checkRole(["user"]), addFavorites);
router.delete("/favorites", checkRole(["user"]), removeFavorites);

export default router;
