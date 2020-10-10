const expressLoader = require("./express.js");
const sequelizeLoader = require("../models");

module.exports = async (app) => {
  await expressLoader(app);
  await sequelizeLoader.sequelize.sync();
  console.log(`❗️express Loaded`);
};
