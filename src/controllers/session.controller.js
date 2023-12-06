import {
  servGenLinkResetPass,
  servResetPassword,
} from "../services/resetPassword.js";
import {
  servAuthUser,
  servAuthUserMovil,
  servSendResPassMail,
} from "../utils/auth.js";
import { checkToken, getInfoToken } from "../utils/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUser(email, password);
  res.json(response);
};

export const genResetPassLink = async (req, res) => {
  const { email } = req.body;
  const url = await servGenLinkResetPass(email);
  if (url == "correo no registrado") {
    res.json({ mensaje: url });
  } else {
    const sendEmail = await servSendResPassMail(email, url);
    res.json(sendEmail);
  }
};
export const obtenerInfoPerfil = async (req, res) => {
  const { token } = req.params;
  const response = await getInfoToken(token);
  res.json(response);
}


export const verifyResetPass = async (req, res) => {
  const token = req.params.token;

  const verifyToken = checkToken(token);
  if (verifyToken) {
    res.json({ mensaje: "token verificado" });
  } else {
    res.status(404).json({ mensaje: "token invalido" });
  }
};
export const resetPassword = async (req, res) => {
  const token = req.params.token;
  const id = req.params.id;
  const { password, repPassword } = req.body;
  const verifyToken = checkToken(token);
  if (verifyToken) {
    if (password === repPassword) {
      const response = await servResetPassword(id, password);
      res.json(response);
    } else {
      res.status(404).json({ mensaje: "contraseña no coinciden" });
    }
  } else {
    res.status(404).json({ mensaje: "token invalido" });
  }
};

export const loginMovil = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUserMovil(email, password);
  res.json(response);
};
