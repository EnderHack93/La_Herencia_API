import { Router } from "express";
import {
  createProductos,
  deleteProducto,
  desactivarProducto,
  getProducto,
  getProductos,
  getProductosCategoria,
  updateProducto,
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/", getProductos);
router.get("/:idCat",getProductosCategoria);
router.post("/", createProductos);
router.put("/:id", updateProducto);
router.delete("/:id", desactivarProducto);
router.get("/:id", getProducto);

export default router ;
