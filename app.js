import express from "express";
import dotenv from "dotenv";
import productsRoutes from "./src/routes/productos.routes.js";
import categorias from "./src/routes/categorias.routes.js";
import personas from "./src/routes/personas.routes.js";
import sessions from "./src/routes/session.routes.js";
import pedidos from "./src/routes/pedidos.routes.js";
import puntuaciones from './src/routes/puntuaciones.routes.js';
import detallePedidos from "./src/routes/detallePedidos.routes.js"
import cupones from "./src/routes/cupones.routes.js"
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import moment from "moment/moment.js";

dotenv.config();

const upload = multer();

const app = express();

app.use(bodyParser.json());
app.use(express.json());
moment.tz.setDefault('America/La_Paz');

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
app.use("/cupones",cupones);
app.use("/puntuaciones",puntuaciones)

export default app;
