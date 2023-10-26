import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const cupon = sequelize.define("cupones", {
  id_cupon: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  porcentajeDescuento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usosMaximos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usosDisponibles: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
export { cupon };
