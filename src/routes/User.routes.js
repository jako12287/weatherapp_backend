import { Router } from "express";
import {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  destroyUser,
} from "../controllers/User.controllers.js";

const router = Router();

router.get("/users", getAllUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", destroyUser);
router.post("/users", createUser);

export default router;
