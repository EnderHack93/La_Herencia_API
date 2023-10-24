import express from "express";
import dotenv from "dotenv";
import productsRoutes from "./src/routes/productos.routes.js";
import categorias from "./src/routes/categorias.routes.js";
import personas from "./src/routes/personas.routes.js";
import sessions from "./src/routes/session.routes.js";
import pedidos from "./src/routes/pedidos.routes.js";
import detallePedidos from "./src/routes/detallePedidos.routes.js"
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";

dotenv.config();

const upload = multer();

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(upload.any());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/productos", productsRoutes);
app.use("/categorias", categorias);
app.use("/personas", personas);
app.use("/session",sessions);
app.use("/pedidos",pedidos);
app.use("/detallepedidos",detallePedidos);

export default app;
