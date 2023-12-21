const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

//
const Dificultad = sequelize.define(
  "dificultad",
  {
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    tableName: "dificultad",
  }
);

module.exports = Dificultad;
