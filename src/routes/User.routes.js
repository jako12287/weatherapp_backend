import { Router } from "express";
import {
  getAllUser,
  getUserById,
  updateUser,
  destroyUser,
} from "../controllers/User.controllers.js";
import { checkRole } from "../helpers/Auth/verifyToken.js";

const router = Router();

router.get("/users", checkRole(["user"]), getAllUser);
router.get("/users/:id", checkRole(["user"]), getUserById);
router.put("/users/:id", checkRole(["user"]), updateUser);
router.delete("/users/:id", checkRole(["user"]), destroyUser);

export default router;
