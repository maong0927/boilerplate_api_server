const express = require("express");
const config = require("./config");
const loaders = require("./loaders");

const startServer = async () => {
  const app = express();

  await loaders(app);

  app.listen(config.port, (err) => {
    if (err) {
      next(err);
    }
    console.log(`💌 Listening on port : ${config.port}`);
  });
};

startServer();
