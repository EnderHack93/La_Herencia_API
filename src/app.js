import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/productos.routes.js";

dotenv.config();


const app = express();

app.use(express.json());
app.use("/productos",router);

export default app;