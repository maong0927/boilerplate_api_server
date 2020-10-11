const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const config = require("../../config");
const authService = require("../../services/auth");

const router = Router();
module.exports = async (app) => {
  app.use("/auth", router);
  app.use(errors());
  router.post(
    "/join",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required().regex(config.pwdRestriction),
        name: Joi.string().required().max(10),
      }),
    }),
    async (req, res, next) => {
      try {
        await authService.join(req.body);
        return res.json({ message: "success" });
      } catch (err) {
        console.error(`👻${err.message}`);
        return res.status(401).json({ message: err.message });
      }
    }
  );

  router.post("/login", (req, res, next) => {
    try {
      passport.authenticate("local", (err, userInfo, failInfo) => {
        console.log(failInfo);
        if (!userInfo || err) {
          return res.status(401).json({ message: failInfo.reason });
        }
        req.login(userInfo, { session: false }, (err) => {
          if (err) throw new Error(err);

          const token = authService.generateToken(userInfo);
          return res.json({ token });
        });
      })(req, res, next);
    } catch (err) {
      console.error(`👻${err.message}`);
      return res.status(401).message({ message: err });
    }
  });
};
