import { Router } from "express";

import {
  crearNuevoDetallePedido,
  editarDetallePedido,
  getAllDetallePedido,
  getDetallePedidoId,
  getDetallebyPk,
  getProdMasVendido,
} from "../controllers/detallePedidos.controller.js";

const router = Router();

router.get("/", getAllDetallePedido);
router.get("/:id", getDetallePedidoId);
router.post('/:id',crearNuevoDetallePedido)
router.get("/detalle/:id",getDetallebyPk);
router.put('/editar/:id',editarDetallePedido)
router.put("/", getProdMasVendido);

export default router;
