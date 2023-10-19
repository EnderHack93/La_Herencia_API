import { servGetAllDetallePedidos, servGetDetallePedidoId } from "../services/detallePedidos.js";

const getAllDetallePedido = async(req,res) =>{
    const response = await servGetAllDetallePedidos();
    res.json(response);
}
const getDetallePedidoId = async(req,res) =>{
    const id = req.params.id;
    const response = await servGetDetallePedidoId(id)
    res.json(response);
}

export {
    getAllDetallePedido,
    getDetallePedidoId
}