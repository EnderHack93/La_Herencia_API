import { detallePedido } from "../models/detalle_pedido.js";
import { producto } from "../models/producto.js";
import { servGetProducto } from "./productos.js";
import crypto from "crypto";

export const servGetAllDetallePedidos = async () => {
  const response = await detallePedido.findAll();
  return response;
};

export const servGetDetallePedidoId = async (id_pedido) => {
  const response = await detallePedido.findAll({
    where: { id_pedido: id_pedido },
  });
  return response;
};

export const servCreateDetallePedidos = async (
  id_prod,
  cantidad,
  id_pedido
) => {
  const prodReq = await servGetProducto(id_prod);

  const response = await detallePedido.create({
    id_detalle: crypto.randomUUID(),
    cantidad,
    precioUnitario: prodReq.precio,
    precioTotal: prodReq.precio * cantidad,
    id_pedido,
    id_producto: prodReq.id_producto,
  });
};

export const servGetMasVendido = async ()=>{
  const response = await detallePedido.max('id_producto')
  return response
}
