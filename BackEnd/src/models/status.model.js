const { DataTypes } = require("sequelize");
import sequelize from "../utils/connection";

//
const Status = sequelize.define(
  "status",
  {
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    tableName: "status",
  }
);

export default Status;
