const expressLoader = require("./express.js");

module.exports = async (app) => {
  await expressLoader(app);
  console.log(`❗️express Loaded`);
};
