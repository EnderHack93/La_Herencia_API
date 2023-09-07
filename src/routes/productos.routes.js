import { Router } from "express";
import { getProducts } from "../controllers/productos.controller.js";

const router = Router();

router.get("/",getProducts);

export {router}