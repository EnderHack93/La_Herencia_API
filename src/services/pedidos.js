import moment from "moment";
import { pedido } from "../models/pedido.js";
import {
  servCreateDetallePedidos,
  servGetAllDetallePedidos,
  servGetDetallePedidoId,
} from "./detallePedidos.js";
import crypto from "crypto";
import { servGetProducto } from "./productos.js";

export const servGetAllPedidos = async () => {
  const data = await pedido.findAll();
  return data;
};
export const servGetPedidoId = async (id) => {
  const data = await pedido.findByPk(id);
  return data;
};
export const servCreatePedido = async (id_cliente) => {
  const data = await pedido.create({
    id_pedido: crypto.randomUUID(),
    fecha: moment().format("YYYY-MM-DD"),
    hora: new moment().format("HH:mm:ss"),
    montoTotal: 0,
    id_cliente,
  });
  return data;
};

export const servUpdateStatePedido = async (id_pedido, estado) => {
  const data = await pedido.findByPk(id_pedido);
  if (data == null) return { mensaje: "Pedido no encontrado" };

    data.estado = estado;

    try{
        await data.save();
        return data;
    }catch(e){
        return {mensaje: estado+" no es un estado de pedido valido."};
    }
  
};

export const servAddDetallesPedido = async (data, productos) => {
  for (const producto of productos) {
    await servCreateDetallePedidos(
      producto.id_producto,
      producto.cantidad,
      data.id_pedido
    );
  }
};

export const servRefactorMontoTotal = async (pedido) => {
  var montoT = 0;
  const detalles = await servGetDetallePedidoId(pedido);
  detalles.forEach((detalle) => {
    montoT += detalle.precioTotal;
  });
  const newPedido = await servGetPedidoId(pedido);
  newPedido.montoTotal = montoT;
  newPedido.save();
  return newPedido;
};
