const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");

const router = Router();
module.exports = (app) => {
  app.use("/auth", router);
  app.use(errors());
  router.post(
    "/join",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string()
          .required()
          .regex(/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/),
        name: Joi.string().required().max(10),
      }),
    }),
    async (req, res, next) => {
      try {
        res.json({ message: "success" });
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
      /* const { email, password, name } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) return next(err);
      try {
        await User.create({
          email,
          password: hash,
          name,
        });
        return res.json({ message: "join success" });
      } catch (dbErr) {
        console.error(dbErr);
        return next(dbErr);
      }
    });*/
    }
  );
};
