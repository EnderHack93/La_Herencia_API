import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { pedido } from "./pedido.js";
import { producto } from "./producto.js";

const detallePedido = sequelize.define("detallePedido", {
    id_detalle: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precioUnitario: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    precioTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

detallePedido.belongsTo(pedido,{
    foreignKey:{
        name: "id_pedido"
    }
});

detallePedido.belongsTo(producto,{
    foreignKey:{
        name:"id_producto"
    }
})




export { detallePedido };
