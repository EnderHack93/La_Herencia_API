import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { pedido } from "./pedido.js";

const persona = await sequelize.define('personas',{
    id_persona:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ci:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    estado:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    telefono:{
        type: DataTypes.STRING,
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});
pedido.belongsTo(persona,{
    foreignKey:{
        name:"id_cliente"
    }
})

export {persona}