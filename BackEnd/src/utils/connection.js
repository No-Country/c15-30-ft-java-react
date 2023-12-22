const { Sequelize } = require('sequelize');
require('dotenv').config();

/* const sequelize = new Sequelize({
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  database: process.env.DB,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      required: false,
    },
  },
  define: {
    timestamps: false,
  },
}) */

const sequelize = new Sequelize(process.env.psql, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Puedes necesitar ajustar esto dependiendo de tu configuración de SSL
    }
  }
});
module.exports = sequelize;
