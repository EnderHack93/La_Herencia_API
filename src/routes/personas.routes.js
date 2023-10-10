import { Router } from "express";
import {
    createPersona,
    deactivatePersona,
    getPersona,
    getPersonas,
    updatePersona,
} from "../controllers/personas.controller.js";

const router = Router();

router.get("/",getPersonas);
router.get("/:id",getPersona);
router.post("/",createPersona);
router.put("/:id",updatePersona);
router.delete("/:id",deactivatePersona);

export default router;