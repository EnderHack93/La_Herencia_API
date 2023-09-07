import { Sequelize } from "sequelize";


const url = process.env.PGURL;

export const sequelize = new Sequelize(url);
