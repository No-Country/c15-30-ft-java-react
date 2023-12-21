const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

//
const Pais = sequelize.define(
  "pais",
  {
    codigo: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    tableName: "paises",
  }
);

module.exports = Pais;
