const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Pais = sequelize.define("pais", {
  pais_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo_pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre_pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pais;
