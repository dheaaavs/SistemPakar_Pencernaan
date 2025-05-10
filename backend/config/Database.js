import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("sp_pencernaan", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
