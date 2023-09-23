import {
  servCreateCategoria,
  servDesactivarCategoria,
  servGetCategoria,
  servUpdateCategoria,
  servVerCategorias,
} from "../services/categorias.js";

const getCategorias = async (req, res) => {
  const data = await servVerCategorias();
  res.json(data);
};
const createCategoria = async (req, res) => {
  const  nombre  = req.body;
  if (nombre == null) {
    res.status(400).json({ error: "ingrese los datos requeridos" });
  } else {
    const response = await servCreateCategoria(req.body);
    res.json(response);
  }
};
const getCategoria = async (req, res) => {
  const id = req.params.id;
  const response = await servGetCategoria(id);
  res.json(response);
};
const updateCategoria = async (req, res) => {
  const id = req.params.id;
  const response = await servUpdateCategoria(id, req.body);
  res.json(response);
};
const desactivarCategoria = async (req, res) => {
  const id = req.params.id;
  const response = await servDesactivarCategoria(id);
  res.json(response);
};

export {
  getCategorias,
  createCategoria,
  getCategoria,
  updateCategoria,
  desactivarCategoria,
};
