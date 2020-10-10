const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = new (class AuthService {
  join(body) {
    const { email, password, name } = body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) return next(err);
      await User.create({
        email,
        password: hash,
        name,
      });
    });
  }
})();
