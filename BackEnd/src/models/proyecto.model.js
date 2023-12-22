const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Proyecto = sequelize.define("proyecto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  portada: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  creador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  colaborador_id: {
    /* type: DataTypes.ARRAY(DataTypes.INTEGER), */
    type: DataTypes.INTEGER,
    allowNull: true,
    /*     defaultValue: [],  */
  },
  tarea_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dificultad_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
},  {
  tableName: "proyectos", 
});


module.exports = Proyecto;
