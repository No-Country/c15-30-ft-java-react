/* const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Project = sequelize.define('project', {
  proyecto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false, 
  },
  colaboradores: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
    defaultValue: [], 
  },
  imagenPerfilUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Project;
 */