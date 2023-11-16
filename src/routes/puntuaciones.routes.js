import { Router } from "express";
import { getAllPuntuaciones } from "../controllers/puntuaciones.controller.js";

const router = Router();

router.get("/",getAllPuntuaciones);

export default router;