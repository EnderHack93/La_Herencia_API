import { puntuacion } from "../models/puntuacion.js"

export const servGetPuntuaciones = async()=>{
  const response = await puntuacion.findAll();
  return response;
}