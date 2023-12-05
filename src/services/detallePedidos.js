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
export const servGetDetallePedidoPk = async(id_detalle)=>{
  const response = await detallePedido.findByPk(id_detalle)
  return response
}
export const servEditarDetallePedido = async(id,detalleReq)=>{
  const detalle = await detallePedido.findByPk(id);
  detalle.id_producto = detalleReq.id_producto;
  detalle.cantidad = detalleReq.cantidad;
  detalle.precioUnitario = detalleReq.precioUnitario;
  detalle.precioTotal = detalleReq.precioTotal;
  const newDetalle = await detalle.save();
  return newDetalle;
}

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
