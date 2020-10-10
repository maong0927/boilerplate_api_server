const expressLoader = require("./express.js");
const sequelizeLoader = require("./sequelize.js");

module.exports = async (app) => {
  await expressLoader(app);
  await sequelizeLoader.sequelize.sync();
  console.log(`❗️express Loaded`);
};
