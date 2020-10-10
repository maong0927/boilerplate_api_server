const auth = require("./auth.js");
require("dotenv").config();

process.env.PORT = process.env.PORT || 3000;

module.exports = {
  port: process.env.PORT,

  pwdRestriction: auth.pwdRestriction,
};
