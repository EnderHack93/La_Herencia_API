import Jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const genToken = async (persona) => {
  var generedToken = Jwt.sign({ persona }, process.env.SECRETSTRING, {
    expiresIn: "20s",
  });
  return generedToken;
};
export function checkToken(token) {
  try {
    Jwt.verify(token, process.env.SECRETSTRING,);
    return true;
  } catch (error) {
    return false;
  }

  
}
