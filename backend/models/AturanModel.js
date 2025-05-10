import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Penyakit from "./PenyakitModel.js";
import Gejala from "./GejalaModel.js";

const { DataTypes } = Sequelize;

const Aturan = db.define("aturan", {
  id_aturan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_penyakit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Penyakit,
      key: "id_penyakit"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
  id_gejala: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Gejala,
      key: "id_gejala"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  }
}, {
  tableName: "aturan",
  freezeTableName: true,
  timestamps: false
});

// Relasi
Aturan.belongsTo(Penyakit, { foreignKey: "id_penyakit" });
Aturan.belongsTo(Gejala, { foreignKey: "id_gejala" });

export default Aturan;

(async () => {
  await db.sync();
})();
