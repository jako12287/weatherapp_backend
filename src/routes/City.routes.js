import { Router } from "express";
import { getCity } from "../controllers/City.controllers.js";
import { checkRole } from "../helpers/Auth/verifyToken.js";

const router = Router();

router.get("/city", checkRole(["user", "guest"]), getCity);

export default router;
