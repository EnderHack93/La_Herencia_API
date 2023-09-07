import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { producto } from "./producto.js";

export const categoria = sequelize.define("categorias", {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

categoria.hasMany(producto, {
    foreignKey: "id_categoria",
    sourceKey: "id_categoria",
  });
  
  producto.belongsTo(categoria, {
    foreignKey: "id_categoria",
    targetId: "id_categoria",
  });
