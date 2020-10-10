const createError = require("http-errors");
const cors = require("cors");
const express = require("express");
const routes = require("../api");

module.exports = (app) => {
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", routes);
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
