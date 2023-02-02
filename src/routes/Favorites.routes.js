import { Router } from "express";
import { addFavorites, removeFavorites } from "../controllers/Favorites.controller.js";

const router = Router();

router.post("/favorites/:userId/:cityId", addFavorites);
router.delete("/favorites/:userId/:cityId", removeFavorites);

export default router;
