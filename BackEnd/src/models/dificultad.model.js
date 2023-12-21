const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";

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

export default Dificultad;
