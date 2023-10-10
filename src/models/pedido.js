import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { persona } from "./persona.js";

const pedido = await sequelize.define("pedidos", {
  id_pedido: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  montoTotal: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



export {pedido}