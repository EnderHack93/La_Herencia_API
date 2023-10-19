import { Router } from "express";

import {
  getAllDetallePedido,
  getDetallePedidoId,
} from "../controllers/detallePedidos.controller.js";

const router = Router();

router.get("/", getAllDetallePedido);
router.get("/:id", getDetallePedidoId);

export default router;
