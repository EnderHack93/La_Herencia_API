import { servGetAllPedidos } from "../services/pedidos.js";

const getAllPedidos = async (req, res) => {
  const data = await servGetAllPedidos();
    res.json(data);
};

export {
    getAllPedidos,
}
