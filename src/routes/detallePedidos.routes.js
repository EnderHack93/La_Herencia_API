import { Router } from "express";
import { getAllDetallePedido } from "../controllers/detallePedidos.controller.js";
const router = Router();


router.get('/',getAllDetallePedido);


export default router;