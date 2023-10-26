import { servChangeStateCupon, servCreateCupon, servGetAllCupons } from "../services/cupones.js";

export const getCupones = async (req, res) => {
  const data = await servGetAllCupons();
  res.json(data);
};
export const createCupon = async (req, res) => {
  const { porcentajeDescuento, usosMaximos } = req.body;
  if (porcentajeDescuento == null || usosMaximos == null) {
    res.status(400).json({ mensaje: "Ingrese los campos obligatorios" });
  } else {
    const response = await servCreateCupon(req.body);
    res.json(response);
  }
};

export const changeStateCupon = async (req, res) => {
  const id = req.params.id;
  const response = await servChangeStateCupon(id);
  res.json(response);
}
