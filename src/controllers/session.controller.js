import { servAuthUser, servAuthUserMovil, servGenLinkResetPass } from "../utils/auth.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUser(email, password);
  res.json(response);
};

export const genResetPassLink = async (req, res) => {
  const {email} = req.body;
  const response = await servGenLinkResetPass(email);
  res.json(response);

}

export const loginMovil = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUserMovil(email, password);
  res.json(response);
}

