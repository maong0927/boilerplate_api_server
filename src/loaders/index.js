const expressLoader = require("./express.js");
const sequelizeLoader = require("../models");

module.exports = async (app) => {
  await expressLoader(app);
  console.log(`❗️express Loaded`);

  await sequelizeLoader.sequelize.sync();
  console.log(`❗️database Loaded`);
};
