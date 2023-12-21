const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

// 

const Tarea = sequelize.define("terea", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    colaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "tareas", 
  }
);

module.exports = Tarea;
