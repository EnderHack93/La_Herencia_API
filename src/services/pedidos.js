import { pedido } from "../models/pedido.js";

export const servGetAllPedidos = async () => {
    const data = await pedido.findAll();
    return data;
}