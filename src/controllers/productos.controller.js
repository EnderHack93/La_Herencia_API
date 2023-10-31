import {
  servCreateProductos,
  servDesactivarProducto,
  servGetProducto,
  servGetProductosCat,
  servUpdateProducto,
  servVerProductos,
} from "../services/productos.js";

const getProductos = async (req, res) => {
  const data = await servVerProductos();
  res.json(data);
};
const getProductosCategoria = async (req, res) => {
  const idCategoria = req.params.idCat;
  const data = await servGetProductosCat(idCategoria);
  res.json(data);
};
const createProductos = async (req, res) => {
  const { nombre, precio, descripcion, id_categoria } = req.body;
  const imagen = req.files[0];
  if (
    nombre == null ||
    precio == null ||
    descripcion == null ||
    id_categoria == null,
    imagen == null
  ) {
    res.status(400).json({ error: "ingrese los datos requeridos" });
  } else {
    const response = await servCreateProductos(req.body, imagen);
    res.json(response);
  }
};
const getProducto = async (req, res) => {
  const id = req.params.id;
  const response = await servGetProducto(id);
  res.json(response);
};
const updateProducto = async (req, res) => {
  const id = req.params.id;
  const newImage = req.files[0];
  const response = await servUpdateProducto(id, req.body, newImage);
  res.json(response);
};
const desactivarProducto = async (req, res) => {
  const id = req.params.id;
  const response = await servDesactivarProducto(id);
  res.json(response);
};
const deleteProducto = async (req, res) => {
  const { id } = req.params.id;
  const response = await ser(id, req.body);
  res.json(response);
};
export {
  getProductos,
  createProductos,
  getProductosCategoria,
  getProducto,
  updateProducto,
  deleteProducto,
  desactivarProducto,
};
