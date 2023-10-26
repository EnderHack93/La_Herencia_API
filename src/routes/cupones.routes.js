import { Router } from "express";
import { changeStateCupon, createCupon, getCupones } from "../controllers/cupones.controller.js";


const router = Router();

router.get("/",getCupones);
router.post("/",createCupon);
router.put("/:id",changeStateCupon);

export default router;