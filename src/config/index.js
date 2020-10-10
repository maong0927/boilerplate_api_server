const auth = require("./auth.js");
const db = require("./db.js");

require("dotenv").config();

process.env.PORT = process.env.PORT || 3000;

module.exports = {
  port: process.env.PORT,
  db,
  pwdRestriction: auth.pwdRestriction,
};
