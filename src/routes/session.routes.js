import { Router } from "express";
import { login } from "../controllers/session.controller.js";
import { verifyToken } from "../middleware/session.js";

const router = Router();

router.get("/login",login);

export default router;