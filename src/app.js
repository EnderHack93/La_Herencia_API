import express from "express";
import dotenv from "dotenv";
import productsRoutes from "./routes/productos.routes.js";
import categorias from "./routes/categorias.routes.js";
import cors  from "cors";

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use("/productos",productsRoutes);
app.use("/categorias",categorias);

export default app;