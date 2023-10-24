import { Router } from "express";
import { login, loginMovil } from "../controllers/session.controller.js";
import { verifyToken } from "../middleware/session.js";

const router = Router();

router.get("/login",login);
router.get("/loginMovil",loginMovil);

export default router;