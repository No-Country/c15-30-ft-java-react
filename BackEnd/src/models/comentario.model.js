const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";
import Proyecto from "../proyectos/Proyecto.model";

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

Comentario.belongsTo(Proyecto, { foreignKey: 'proyecto_id' });
Proyecto.hasMany(Comentario, { foreignKey: 'proyecto_id' });

export default Comentario;
