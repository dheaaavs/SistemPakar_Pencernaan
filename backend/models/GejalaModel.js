import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Gejala = db.define("gejala", {
  id_gejala: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  kode_gejala: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama_gejala: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "gejala",
  freezeTableName: true,
  timestamps: false
});

(async () => {
  await db.sync();
})();


export default Gejala;