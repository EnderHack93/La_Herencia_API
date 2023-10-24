import { servAuthUser, servAuthUserMovil } from "../utils/auth.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUser(email, password);
  res.json(response);
};

export const loginMovil = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUserMovil(email, password);
  res.json(response);
}

