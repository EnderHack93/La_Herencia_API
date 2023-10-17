import { Router } from "express";
import { getAllPedidos } from "../controllers/pedidos.controller.js";

const router = Router();

router.get("/",getAllPedidos)

export default router