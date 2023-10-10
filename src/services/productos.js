import { producto } from "../models/producto.js";
import { replaceImage, uploadFile } from "./cloudStorage.js";
export const servVerProductos = async () => {
  const response = await producto.findAll({
    where: {
      estado: true,
    },
  });
  return response;
};

export const servCreateProductos = async (productoReq, imagen) => {
  const id_producto = await genId(productoReq.nombre);
  const upImage = await uploadFile(imagen);
  const newProducto = await producto
    .create({
      id_producto: id_producto,
      nombre: productoReq.nombre,
      descripcion: productoReq.descripcion,
      precio: productoReq.precio,
      imagen: upImage,
      id_categoria: productoReq.id_categoria,
    })
    .catch((error) => {
      return error;
    });

  return newProducto;
};

export const servUpdateProducto = async (id, productoObj,imagen) => {
  const prod = await producto.findByPk(id);
  if (!prod) {
    return { message: "Producto no encontrado" };
  }

  const imagenAnteriorUrl = prod.imagen;

  const nombreImagenAnterior = imagenAnteriorUrl.substring(
    imagenAnteriorUrl.lastIndexOf("/") + 1
  );
  if (imagen) {
    const nuevaImgUrl = await replaceImage(imagen, nombreImagenAnterior);
    prod.nombre = productoObj.nombre;
    prod.descripcion = productoObj.descripcion;
    prod.precio = productoObj.precio;
    prod.imagen = nuevaImgUrl
    prod.id_categoria = productoObj.id_categoria;
    await prod.save();
    return prod;
  }else{
    prod.nombre = productoObj.nombre;
    prod.descripcion = productoObj.descripcion;
    prod.precio = productoObj.precio;
    prod.id_categoria = productoObj.id_categoria;
    await prod.save();
    return prod;
  }
};

export const servGetProducto = async (id) => {
  const response = await producto.findByPk(id);
  return response;
};

export const servDesactivarProducto = async (id) => {
  const prod = await producto.findByPk(id);
  prod.estado = prod.estado ? false : true;
  await prod.save();
  return prod;
};

const genId = async (nombreProd) => {
  var id_producto = nombreProd.slice(0, 4);
  id_producto = id_producto + Math.floor(10000 + Math.random() * 90000);
  id_producto = id_producto.toUpperCase();
  return id_producto;
};
