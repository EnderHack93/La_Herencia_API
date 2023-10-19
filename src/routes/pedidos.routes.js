import { Router } from "express";
import {
  createPedido,
  getAllPedidos,
  getPedidoId,
  updateEstadoPedido,
} from "../controllers/pedidos.controller.js";

const router = Router();

router.get("/", getAllPedidos);
router.get("/:id", getPedidoId);
router.post("/", createPedido);
router.put("/:id", updateEstadoPedido);

export default router;
