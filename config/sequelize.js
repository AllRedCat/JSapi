const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.UNAME,
  process.env.PASS,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
