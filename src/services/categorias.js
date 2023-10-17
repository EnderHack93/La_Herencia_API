import {categoria} from '../models/categoria.js';
import { servDesactivarProducto, servObtenerProdPorCat } from './productos.js';

export const servVerCategorias = async ()=>{
    const response = await categoria.findAll({
        where: {
            estado: true
        }
    });
    return response;
}

export const servCreateCategoria = async (categoriaReq)=>{
    const newCategoria = await categoria.create({
        nombre: categoriaReq.nombre,
    }).catch((error)=>{
        return error
    })

    return newCategoria;
}

export const servUpdateCategoria = async (id,categoriaObj)=>{
    const cate = await categoria.findByPk(id);
    const {nombre} = categoriaObj;
    cate.nombre = nombre;
    await cate.save();
    return cate;
}

export const servGetCategoria = async (id)=>{
    const response = await categoria.findByPk(id);
    return response;
}

export const servDesactivarCategoria = async (id)=>{
    const cate = await categoria.findByPk(id);
    const productos = await servObtenerProdPorCat(id);
    if(productos.length > 0){

        productos.forEach(async(producto) => {
            await servDesactivarProducto(producto.id_producto);
          });
    }
    cate.estado = cate.estado ? false : true;
    await cate.save();
    return cate;
}