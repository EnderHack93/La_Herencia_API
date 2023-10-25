import { Router } from "express";
import { genResetPassLink, login, loginMovil, verifyResetPass } from "../controllers/session.controller.js";
import { verifyToken } from "../middleware/session.js";

const router = Router();

router.get("/login",login);
router.post("/loginMovil",loginMovil);
router.get("/forgotPass",genResetPassLink);
router.get("/reset-password/:id/:token",verifyResetPass);

export default router;