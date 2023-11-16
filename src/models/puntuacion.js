import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const puntuacion = await sequelize.define("puntuaciones", {
  id_puntuacion: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export { puntuacion };
