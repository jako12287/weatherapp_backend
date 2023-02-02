import { Router } from "express";
import { getCity } from "../controllers/City.controllers.js";

const router = Router();

router.get("/city", getCity);

export default router;
