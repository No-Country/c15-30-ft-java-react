const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
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
})

module.exports = sequelize;
