const Sequelize = require("sequelize");

const { db } = require("../config");
const user = require("../models/user");

const sequelize = new Sequelize(db.database, db.username, db.password, db);

module.exports = {
  sequelize,
  Sequelize,
  User: user(sequelize, Sequelize),
};
