import { Router } from "express";
import {
  createPedido,
  getAllPedidos,
  getPedidoId,
  getPedidosByUserId,
  updateEstadoPedido,
} from "../controllers/pedidos.controller.js";

const router = Router();

router.get("/", getAllPedidos);
router.get("/:id", getPedidoId);
router.post("/", createPedido);
router.put("/:id", updateEstadoPedido);
router.get("/user/:id", getPedidosByUserId);

export default router;
