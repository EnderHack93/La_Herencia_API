import moment from "moment";
import { pedido } from "../models/pedido.js";
import {
  servCreateDetallePedidos,
  servGetAllDetallePedidos,
  servGetDetallePedidoId,
} from "./detallePedidos.js";
import crypto from "crypto";
import { servGetProducto } from "./productos.js";
import { servChangeStateCupon, servGetCuponCodigo } from "./cupones.js";

export const servGetAllPedidos = async () => {
  const data = await pedido.findAll({
    order:[["fecha","desc"],["hora","desc"]]
  });
  return data;
};
export const servGetPedidoId = async (id) => {
  const data = await pedido.findByPk(id);
  return data;
};
export const servGetPedidosByUser = async(id) =>{
  const data = await pedido.findAll({
    where: {
      id_cliente: id
    }
  })
  return data;
}
export const servFilterPedidos = async (columna, tipo) => {
  const data = await pedido.findAll({
    order: [[columna, tipo]],
  });
  return data;
};

export const servApplyCupon = async (id_pedido, codigo) => {
  const cupon = await servGetCuponCodigo(codigo);
  const pedidoRes = await pedido.findByPk(id_pedido);

  if (cupon == null) {
    return { mensaje: "cupon no encontrado" };
  } else {
    if (cupon.usosDisponibles == 0) {
      return { mensaje: "cupon no disponible" };
    } else {
      pedidoRes.montoTotal = pedidoRes.montoTotal - (pedidoRes.montoTotal * (cupon.porcentajeDescuento / 100));

      pedidoRes.save();

      cupon.usosDisponibles = cupon.usosDisponibles - 1;
      if(cupon.usosDisponibles == 0){
        cupon.estado = false;
      }
      cupon.save();

      return pedidoRes;
    }
  }
};
export const servCreatePedido = async (id_cliente) => {
  const data = await pedido.create({
    id_pedido: crypto.randomUUID(),
    fecha: moment().format("YYYY-MM-DD"),
    hora: moment().format("HH:mm:ss"),
    montoTotal: 0,
    id_cliente,
  });
  return data;
};

export const servUpdateStatePedido = async (id_pedido, estado) => {
  const data = await pedido.findByPk(id_pedido);
  if (data == null) return { mensaje: "Pedido no encontrado" };

  data.estado = estado;

  try {
    await data.save();
    return data;
  } catch (e) {
    return { mensaje: estado + " no es un estado de pedido valido." };
  }
};
export const servUpdateEditarPrecioPedido = async() =>{

}

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
