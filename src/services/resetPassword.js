import { persona } from "../models/persona.js";
import { genTokenResetPass } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const servGenLinkResetPass = async (correo) => {
    const user = await persona.findOne({
      where: { correo },
    });
    if (!user) return "correo no registrado";
  
    const token = await genTokenResetPass(user.id_persona, user.correo);
  
    const url =
      process.env.HOST +
      "session/reset-password/" +
      user.id_persona +
      "/" +
      token;
  
    return url;
  };
  export const servResetPassword = async (id, password) => {
    const user = await persona.findByPk(id);
    if (!user) {
      return { mensaje: "persona no encontrada" };
    } else {
      user.password = await bcrypt.hash(password,10); ;
      user.save();
      return { mensaje: "success" };
    }
  };