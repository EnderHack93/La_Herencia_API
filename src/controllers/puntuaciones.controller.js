import { servGetPuntuaciones } from "../services/puntuaciones.js"

export const getAllPuntuaciones = async (req,res)=>{
  const data = await servGetPuntuaciones();
  res.send(data);
}