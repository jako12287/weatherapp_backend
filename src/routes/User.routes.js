import { Router } from "express";
import { getAllUser } from "../controllers/User.controllers.js";

const router = Router();

router.get("/users", getAllUser);

export default router;
