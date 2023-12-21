const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Usuario = sequelize.define(
  "usuario",
  {
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: [5, 70],
        is: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      },
    },

    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8, 65],
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/,
      },
    },

    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },

    rol: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    githubUser: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    pais: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    avatar: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "usuarios",
  }
);

module.exports = Usuario;
