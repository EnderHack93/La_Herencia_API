import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { producto } from "./producto.js";

const categoria = sequelize.define("categorias", {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export {categoria}

