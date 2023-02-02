import { Router } from "express";
import { addFavorites } from "../controllers/Favorites.controller.js";

const router = Router();

router.post("/favorites/:userId/:cityId", addFavorites);

export default router;
