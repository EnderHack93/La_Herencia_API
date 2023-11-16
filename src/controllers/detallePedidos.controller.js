import {
  servGetAllDetallePedidos,
  servGetDetallePedidoId,
  servGetMasVendido,
} from "../services/detallePedidos.js";

export const getAllDetallePedido = async (req, res) => {
  const response = await servGetAllDetallePedidos();
  res.json(response);
};
export const getDetallePedidoId = async (req, res) => {
  const id = req.params.id;
  const response = await servGetDetallePedidoId(id);
  res.json(response);
};
export const getProdMasVendido = async(req,res)=>{
  const response = await servGetMasVendido();
  res.json(response);
}


