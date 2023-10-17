import { detallePedido } from "../models/detalle_pedido.js";

export const servGetAllDetallePedidos = async () => {
    const response = await detallePedido.findAll();
    return response;
}