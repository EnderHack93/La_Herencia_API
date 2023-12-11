import {
  servCreateDetallePedidos,
  servEditarDetallePedido,
  servGetAllDetallePedidos,
  servGetDetallePedidoId,
  servGetDetallePedidoPk,
  servGetMasVendido,
} from "../services/detallePedidos.js";
import { servRefactorMontoTotal } from "../services/pedidos.js";

export const getAllDetallePedido = async (req, res) => {
  const response = await servGetAllDetallePedidos();
  res.json(response);
};
export const getDetallePedidoId = async (req, res) => {
  const id = req.params.id;
  const response = await servGetDetallePedidoId(id);
  res.json(response);
};
export const getDetallebyPk = async (req, res) => {
  const id = req.params.id;
  const response = await servGetDetallePedidoPk(id);
  res.json(response);
};
export const editarDetallePedido = async (req, res) => {
  const id = req.params.id;
  const { id_producto, cantidad, precioUnitario, precioTotal } = req.body;
  const newDetalle = await servEditarDetallePedido(id, req.body);
  const pedidoActualizado = await servRefactorMontoTotal(newDetalle.id_pedido);

  res.json(pedidoActualizado);
};
export const crearNuevoDetallePedido = async (req, res) => {
  const { id_pedido, id_producto, cantidad } = req.body;
  const response = await servCreateDetallePedidos(
    id_producto,
    cantidad,
    id_pedido
  );
  await servRefactorMontoTotal(id_pedido);
  res.json(response);
};
export const getProdMasVendido = async (req, res) => {
  const response = await servGetMasVendido();
  res.json(response);
};
