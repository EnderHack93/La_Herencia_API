import { Sequelize } from "sequelize";
import {config} from "dotenv";

config();

const url = process.env.PGURL;
const database = process.env.PGDATABASE;
const username = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const host = process.env.PGHOST;
const port = process.env.PGPORT;

const sequelize = new Sequelize(url);
export{sequelize}
