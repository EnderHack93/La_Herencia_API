import {
  servCreateProductos,
  servVerProductos,
} from "../services/productos.js";

const getProductos = async (req, res) => {
  const data = await servVerProductos();
  res.json({ productos: data });
};
const createProductos = async (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  if (nombre == null || precio == null || descripcion == null) {
    res.status(400).json({ error: "ingrese los datos requeridos" });
  } else {
    const response = await servCreateProductos(req.body);
    res.json(response);
  }
};
const getProducto = async (req, res) => {};
const updateProducto = async (req, res) => {};
const deleteProducto = async (req, res) => {};
export {
  getProductos,
  createProductos,
  getProducto,
  updateProducto,
  deleteProducto,
};
