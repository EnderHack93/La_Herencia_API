import { DataTypes } from "sequelize";

import { sequelize } from "../config/sequelize.js";

const producto = await sequelize.define('productos',{
    id_producto:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    precio:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
    
})

export {producto}