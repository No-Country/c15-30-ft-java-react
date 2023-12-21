const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";

// 

const Tecnologia = sequelize.define(
  "tecnologia",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tecnologias", 
  }
);

export default Tecnologia;
