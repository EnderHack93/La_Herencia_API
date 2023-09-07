import { Sequelize } from "sequelize";

const url = process.env.PGURL;
const database = process.env.PGDATABASE;
const username = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const host = process.env.PGHOST;
const port = process.env.PGPORT;

export const sequelize = new Sequelize(database, username, password, {
  host:host,
  port:6464,
  dialect: "postgres",
});
