const Sequelize = require("sequelize");

const config = require("../config");
const user = require("./user");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

module.exports = {
  sequelize,
  Sequelize,
  User: user(sequelize, Sequelize),
};
