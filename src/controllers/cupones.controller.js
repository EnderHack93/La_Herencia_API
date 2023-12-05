import {
  servChangeStateCupon,
  servCreateCupon,
  servEditarCupon,
  servGetAllCupons,
  servGetCuponPk,
} from "../services/cupones.js";

export const getCupones = async (req, res) => {
  const data = await servGetAllCupons();
  res.json(data);
};
export const createCupon = async (req, res) => {
  const { porcentajeDescuento, usosMaximos,usosDisponibles } = req.body;
  if (porcentajeDescuento == null || usosMaximos == null || usosDisponibles) {
    res.status(400).json({ mensaje: "Ingrese los campos obligatorios" });
  } else {
    const response = await servCreateCupon(req.body);
    res.json(response);
  }
};
export const editarCupon = async (req, res) => {
  const { porcentajeDescuento, usosMaximos } = req.body;
  const id = req.params.id;
  if (porcentajeDescuento == null || usosMaximos == null) {
    res.status(400).json({ mensaje: "Ingrese los campos obligatorios" });
  } else {
    const response = await servEditarCupon(id, req.body);
    res.json(response);
  }
};
export const getCupon = async (req, res) => {
  const id = req.params.id;
  const response = await servGetCuponPk(id);
  res.json(response);
};

export const changeStateCupon = async (req, res) => {
  const id = req.params.id;
  const response = await servChangeStateCupon(id);
  res.json(response);
};
