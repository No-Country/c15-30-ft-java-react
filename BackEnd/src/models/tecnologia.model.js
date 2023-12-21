const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

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
