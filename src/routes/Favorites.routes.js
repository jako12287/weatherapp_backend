import { Router } from "express";
import { addFavorites, removeFavorites, allFavorites } from "../controllers/Favorites.controller.js";

const router = Router();

router.get("/favorites/:userId", allFavorites);
router.post("/favorites/:userId/:cityId", addFavorites);
router.delete("/favorites/:userId/:cityId", removeFavorites);

export default router;
