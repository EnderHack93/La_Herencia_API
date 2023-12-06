import { categoria } from "../models/categoria.js";
import { producto } from "../models/producto.js";
import {
  servDesactivarProducto,
  servDesactivarProductoCat,
  servObtenerProdPorCat,
} from "./productos.js";

export const servVerCategorias = async () => {
  const categorias = await categoria.findAll({
    where:{
      estado : true
    },
    order: [
      ["estado", "desc"],
      ["id_categoria", "asc"],
    ],
  });

//   for (const categoria of categorias) {
//     const productosPorCategoria = await producto.count({
//       where: { id_categoria: categoria.id_categoria },
//     });

//     categoria.productosAsignados = productosPorCategoria;
    
//   }

  return categorias;
};

export const servCreateCategoria = async (categoriaReq) => {
  const newCategoria = await categoria
    .create({
      nombre: categoriaReq.nombre,
    })
    .catch((error) => {
      return error;
    });

  return newCategoria;
};

export const servUpdateCategoria = async (id, categoriaObj) => {
  const cate = await categoria.findByPk(id);
  const { nombre } = categoriaObj;
  cate.nombre = nombre;
  await cate.save();
  return cate;
};

export const servGetCategoria = async (id) => {
  const response = await categoria.findByPk(id);
  return response;
};

export const servDesactivarCategoria = async (id) => {
  const cate = await categoria.findByPk(id);
  cate.estado = cate.estado ? false : true;
  await cate.save();
  const productos = await servObtenerProdPorCat(id);
  if (productos.length > 0) {
    productos.forEach(async (producto) => {
      const a = await servDesactivarProductoCat(
        producto.id_producto,
        cate.estado
      );
    });
  }
  return cate;
};
