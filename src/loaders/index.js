const expressLoader = require("./express.js");
const sequelizeLoader = require("../models");
const passportLoader = require("./passport.js");

module.exports = async (app) => {
  await expressLoader(app);
  console.log(`❗️express Loaded`);

  await sequelizeLoader.sequelize.sync();
  console.log(`❗️database Loaded`);

  await passportLoader(app);
  console.log(`❗️passport Loaded`);
};
