import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/productos.routes.js";
import cors  from "cors";

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use("/productos",router);

export default app;