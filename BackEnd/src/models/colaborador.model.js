const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

//
const Colaborador = sequelize.define(
  "colaborador",
  {
    colaborador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proyecto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "colaboradores",
  }
);
module.exports = Colaborador;
