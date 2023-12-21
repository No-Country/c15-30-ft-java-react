const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";

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

export default Pais;
