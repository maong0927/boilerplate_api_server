const auth = require("./routes/auth.js");

module.exports = async (app) => {
  // Login, Logout, Join
  auth(app);
};
