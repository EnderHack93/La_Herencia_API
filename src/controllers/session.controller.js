import { servAuthUser } from "../services/auth.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await servAuthUser(email, password);
  res.json(response);
};
export { login };
