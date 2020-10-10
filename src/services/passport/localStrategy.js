const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../../models");

const passportConfig = { usernameField: "email", passwordField: "password" };

const passportVerify = async (email, password, done) => {
  try {
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      done(null, false, { reason: "Incorrect username" });
      return;
    }

    if (!bcrypt.compare(password, user.password)) {
      done(null, false, { reason: "Incorrect password" });
      return;
    }
    done(null, user);
  } catch (err) {
    console.error(`👻${err.message}`);
    done(err);
  }
};

module.exports = (passport) => {
  passport.use("local", new LocalStrategy(passportConfig, passportVerify));
};
