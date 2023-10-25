import {
  servAuthUser,
  servAuthUserMovil,
  servGenLinkResetPass,
  servSendResPassMail,
} from "../utils/auth.js";
import { checkToken } from "../utils/jwt.js";

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

export const verifyResetPass = async (req, res) => {
  const token = req.params.token;

  const verifyToken = checkToken(token);
  if(verifyToken) {
    res.json({mensaje:"token verificado"})
  }else{
    res.status(404).json({mensaje:"token invalido"})
  }
}

export const loginMovil = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUserMovil(email, password);
  res.json(response);
};
