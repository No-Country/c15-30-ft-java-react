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
  colaboradores: {
    /* type: DataTypes.ARRAY(DataTypes.INTEGER), */
    type: DataTypes.INTEGER,
    allowNull: true,
    /*     defaultValue: [],  */
  },
  tareas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dificultad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
},  {
  tableName: "proyectos", 
});

// Esto de abajo está generando un error por que la asociacion, en el modelo hay 'dificultad' y se esta asociando a una tabla del mismo nombre. No sé si funcione pero podríamos llamar dificultad_id en este modelo e intentar la asocicacion de nuevo. 

/* 
Proyecto.hasOne(Dificultad, { foreignKey: 'id'});
Dificultad.belongsTo(Proyecto, { foreignKey: 'id' }); 
*/

module.exports = Proyecto;
