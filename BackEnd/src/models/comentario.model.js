const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Comentario = sequelize.define(
  "comentario",
  {
    contenido: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proyecto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "comentarios",
  }
);


module.exports = Comentario;
