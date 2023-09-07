import { Router } from "express";
import { createProductos, deleteProducto, getProducto, getProductos, updateProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get("/",getProductos);
router.post("/",createProductos);
router.put("/:id",updateProducto);
router.delete("/:id",deleteProducto);
router.get("/:id",getProducto)

export {router}