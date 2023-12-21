const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Usuario = sequelize.define("usuario", {
  usuario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puesto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pais: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lista_tecnologias: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  lista_tareas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  lista_contactos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  lista_proyectos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Usuario;
