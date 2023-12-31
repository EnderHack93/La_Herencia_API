import { DataTypes } from "sequelize";

import { sequelize } from "../config/sequelize.js";
import { categoria } from "./categoria.js";
import { puntuacion } from "./puntuacion.js";

const producto = await sequelize.define("productos", {
  id_producto: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
producto.belongsTo(categoria, {
  foreignKey: {
    name: "id_categoria",
  },
});
puntuacion.belongsTo(puntuacion, {
  foreignKey:{
    name:"id_producto"
  },
  allowNull:false,
})

export { producto };
