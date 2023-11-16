import { Router } from "express";

import {
  getAllDetallePedido,
  getDetallePedidoId,
  getProdMasVendido,
} from "../controllers/detallePedidos.controller.js";

const router = Router();

router.get("/", getAllDetallePedido);
router.get("/:id", getDetallePedidoId);
router.put("/", getProdMasVendido);

export default router;
