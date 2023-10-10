import {
  servCreatePersona,
  servDeactivatePersona,
  servUpdatePersona,
  servVerPersona,
  servVerPersonas,
} from "../services/personas.js";

const getPersonas = async (req, res) => {
  const data = await servVerPersonas();
  res.json(data);
};
const getPersona = async (req, res) => {
  const id = req.params.id;
  const data = await servVerPersona(id);
  res.json(data);
};
const createPersona = async (req, res) => {
  const { nombres, apellidos, telefono, ci, correo, password } = req.body;
  if (
    nombres == null ||
    apellidos == null ||
    telefono == null ||
    ci == null ||
    correo == null ||
    password == null
  ) {
    res.status(400).json({ error: "ingrese los datos requeridos" });
  } else {
    const response = await servCreatePersona(req.body);
    res.json(response);
  }
};
const updatePersona = async (req, res) => {
  const id = req.params.id;
  const response = await servUpdatePersona(id, req.body);
  res.json(response);
};
const deactivatePersona = async (req, res) => {
    const id = req.params.id;
    const response = await servDeactivatePersona(id);
    res.json(response);
};
    
export {
  getPersonas,
  getPersona,
  createPersona,
  updatePersona,
  deactivatePersona,
};
