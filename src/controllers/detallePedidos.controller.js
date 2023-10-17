import { servGetAllDetallePedidos } from "../services/detallePedidos.js";

const getAllDetallePedido = async(req,res) =>{
    const response = await servGetAllDetallePedidos();
    res.json(response);
}

export {
    getAllDetallePedido,
}