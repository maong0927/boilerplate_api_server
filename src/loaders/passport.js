const passport = require("passport");
const passportConfig = require("../services/passport");

module.exports = (app) => {
  app.use(passport.initialize());
  passportConfig();
};
