const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";

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

export default Colaborador;
