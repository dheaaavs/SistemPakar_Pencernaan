import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Penyakit = db.define("penyakit", {
  id_penyakit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  kode_penyakit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama_penyakit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  definisi: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  solusi: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: "penyakit",
  freezeTableName: true,
  timestamps: false
});

export default Penyakit;

(async () => {
  await db.sync();
})();
