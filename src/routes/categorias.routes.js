import { Router } from "express";
import {
  createCategoria,
  desactivarCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/categorias.controller.js";

const router = Router();

router.get("/", getCategorias);
router.post("/", createCategoria);
router.put("/:id", updateCategoria);
router.delete("/:id", desactivarCategoria);
router.get("/:id", getCategoria);

export default router;
