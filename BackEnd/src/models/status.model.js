const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Status = sequelize.define("status", {
  status_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_status: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Status;
