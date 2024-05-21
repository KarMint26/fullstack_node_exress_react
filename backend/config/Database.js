import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  }
);

export default db;
