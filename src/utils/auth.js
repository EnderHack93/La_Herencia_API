import { persona } from "../models/persona.js";
import bcrypt from "bcrypt";
import { genToken } from "./jwt.js";
import process from 'process';

export const servAuthUser = async (correo, password) => {
  const user = await persona.findOne({
    where: { correo },
  });
  if (!user) return { mensaje: "correo no registrado" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { mensaje: "contraseña incorrecta" };

  const token = await genToken({
    id_persona: user.id_persona,
    nombres: user.nombres,
    apellidos: user.apellidos,
    ci: user.ci,
    correo: user.correo,
  });

  return { token };
};

export const servAuthUserMovil = async (correo,password)=>{
  const user = await persona.findOne({
    where: { correo },
  });
  if (!user) return { mensaje: "correo no registrado" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { mensaje: "contraseña incorrecta" };

  return true;
}
export const servGenLinkResetPass = async (correo)=>{
  const user = await persona.findOne({
    where: { correo },
  });
  if (!user) return { mensaje: "correo no registrado" };
  
  return process.env.HOST;

}
