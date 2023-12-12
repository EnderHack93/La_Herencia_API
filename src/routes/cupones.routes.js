import { Router } from "express";
import {
  changeStateCupon,
  createCupon,
  editarCupon,
  getCupon,
  getCuponCodigo,
  getCupones,
} from "../controllers/cupones.controller.js";

const router = Router();

router.get("/", getCupones);
router.post("/", createCupon);
router.get("/:id", getCupon);
router.get("/codigo/:id", getCuponCodigo);
router.put("/:id", editarCupon);
router.delete("/:id", changeStateCupon);

export default router;
