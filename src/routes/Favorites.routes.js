import { Router } from "express";
import { verifyToken } from "../helpers/Auth/verifyToken.js";
import {
  addFavorites,
  removeFavorites,
  allFavorites,
} from "../controllers/Favorites.controller.js";

const router = Router();

router.get("/favorites/:userId", verifyToken, allFavorites);
router.post("/favorites", verifyToken, addFavorites);
router.delete("/favorites", verifyToken, removeFavorites);

export default router;
