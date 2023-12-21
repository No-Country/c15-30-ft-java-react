const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

//
const Colaborador = sequelize.define(
  "colaborador",
  {
    colaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "colaboradores",
  }
);
module.exports = Colaborador;
