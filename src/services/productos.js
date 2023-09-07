import { producto } from "../models/producto.js";
export const servVerProductos = async ()=>{
    const response = await producto.findAll({
        where: {
            estado: true
        }
    });
    return response;
}

export const servCreateProductos = async (productoReq)=>{
    const id_producto =  await genId(productoReq.nombre);
    const newProducto = await producto.create({
        id_producto: id_producto,
        nombre: productoReq.nombre,
        descripcion:productoReq.descripcion,
        precio:productoReq.precio,
    }).catch((error)=>{
        return error
    })

    return newProducto;
}

const genId = async(nombreProd)=>{
    var id_producto = nombreProd.slice(0,4);
    id_producto = id_producto + Math.floor(10000 + Math.random() * 90000);
    id_producto = id_producto.toUpperCase();
    return id_producto;
}