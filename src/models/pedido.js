import { DataTypes, ENUM } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { persona } from "../models/persona.js";

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
    type: ENUM,
    values: ["pendiente", "confirmado", "entregado", "cancelado"],
    defaultValue: "pendiente",
    allowNull: false,
  },
});

export { pedido };
