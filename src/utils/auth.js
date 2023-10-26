import { persona } from "../models/persona.js";
import bcrypt from "bcrypt";
import { genToken, genTokenResetPass } from "./jwt.js";
import process from "process";
import { servSendUrlResetPass } from "./mail.js";

export const servAuthUser = async (correo, password) => {
  const user = await persona.findOne({
    where: { correo, estado: true },
  });
  if (!user) return { mensaje: "correo no registrado o usuario invalidado" };

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

export const servAuthUserMovil = async (correo, password) => {
  const user = await persona.findOne({
    where: { correo, estado: true },
  });
  if (!user) return { mensaje: "correo no registrado o usuario invalidado" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { mensaje: "contraseña incorrecta" };

  return true;
};

export const servSendResPassMail = async (correo, url) => {
  const sendEmail = await servSendUrlResetPass(correo, url);
  return sendEmail;
};
