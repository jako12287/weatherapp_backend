import { Router } from "express";
import {
  login,
  register,
  loginGuest,
} from "../controllers/Authentication.controller.js";

const router = Router();

router.post("/guest", loginGuest);
router.post("/register", register);
router.post("/login", login);

export default router;
