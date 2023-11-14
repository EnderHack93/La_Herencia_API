import {
  servAddDetallesPedido,
  servApplyCupon,
  servCreatePedido,
  servFilterPedidos,
  servGetAllPedidos,
  servGetPedidoId,
  servGetPedidosByUser,
  servRefactorMontoTotal,
  servUpdateStatePedido,
} from "../services/pedidos.js";

export const getAllPedidos = async (req, res) => {
  const {columna,tipo} = req.body;
  if(columna == null || tipo == null){
    const data = await servGetAllPedidos();
    res.json(data);
  }else{
    const data = await servFilterPedidos(columna,tipo);
    res.json(data);
  }
  
};

export const getPedidoId = async (req, res) => {
  const id = req.params.id;
  const data = await servGetPedidoId(id);
  res.json(data);
};
export const getPedidosByUserId = async (req,res) =>{
  const id = req.params.id;
  const data = await servGetPedidosByUser(id);
  res.json(data);
}

export const updateEstadoPedido = async (req, res) => {
  const id = req.params.id;
  const {estado} = req.body;
  if(estado != null){
    const data = await servUpdateStatePedido(id,estado);
  res.json(data);
  }else{
    res.status(404).json({"mensaje":"Estado no puede ser null"});
  }
}

export const createPedido = async (req, res) => {
  const { id_cliente } = req.body;
  const { productos } = req.body;
  const {cupon} = req.body;
  if (id_cliente != null) {
    if (productos != null) {
      const data = await servCreatePedido(id_cliente);

      await servAddDetallesPedido(data, productos);

      const newData = await servRefactorMontoTotal(data.id_pedido);
      
      if(cupon != null){
        const applyCupon = await servApplyCupon(newData.id_pedido,cupon);
        res.status(200).json(applyCupon);
      }else{
        res.status(200).json(newData);
      }
    } else {
      res
        .status(400)
        .json({ mensaje: "Se necesitan productos para registrar un pedido" });
    }
  } else {
    res
      .status(400)
      .json({ mensaje: "Se necesita un cliente para registrar un pedido" });
  }
};
