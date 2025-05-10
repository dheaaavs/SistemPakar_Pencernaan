import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Diagnosa = db.define("diagnosa", {
  id_diagnosa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_user: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hasil_diagnosa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tanggal_diagnosa: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "diagnosa",
  freezeTableName: true,
  timestamps: false
});

export default Diagnosa;

(async () => {
  await db.sync();
})();
