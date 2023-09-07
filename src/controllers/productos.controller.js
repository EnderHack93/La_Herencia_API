import { servVerProductos } from "../services/productos.js";

const getProducts = async(req,res)=> {
    const data = await servVerProductos();
    res.send(data);
}
export{getProducts}