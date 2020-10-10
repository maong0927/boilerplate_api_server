const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const config = require("../../config");
const authService = require("../../services/auth");

const router = Router();
module.exports = (app) => {
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
        res.json({ message: "success" });
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
    }
  );
};
