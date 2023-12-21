const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

//
const Status = sequelize.define(
  "status",
  {
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    tableName: "status",
  }
);

module.exports = Status;
