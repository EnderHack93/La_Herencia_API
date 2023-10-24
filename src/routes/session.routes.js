import { Router } from "express";
import { genResetPassLink, login, loginMovil } from "../controllers/session.controller.js";
import { verifyToken } from "../middleware/session.js";

const router = Router();

router.get("/login",login);
router.get("/loginMovil",loginMovil);
router.get("/forgotPass",genResetPassLink);

export default router;