import { Router } from "express";
import {
  genResetPassLink,
  login,
  loginMovil,
  resetPassword,
  verifyResetPass,
} from "../controllers/session.controller.js";
import { verifyToken } from "../middleware/session.js";

const router = Router();

router.get("/login", login);
router.post("/loginMovil", loginMovil);
router.get("/forgotPass", genResetPassLink);
router.get("/reset-password/:id/:token", verifyResetPass);
router.post("/reset-password/:id/:token", resetPassword);

export default router;
