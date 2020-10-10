const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = new (class AuthService {
  async join(body) {
    const { email, password, name } = body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) return next(err);
      try {
        await User.create({
          email,
          password: hash,
          name,
        });
      } catch (err) {
        console.error(err);
        return res.status(407);
      }
    });
  }
})();
