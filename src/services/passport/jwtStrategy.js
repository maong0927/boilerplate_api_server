const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const { User } = require("../../models");

const jwtConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"), // Header 의 authorization 에서 token 찾겠다.
  secretOrKey: process.env.JWT_SECRET,
};

const jwtVerify = async (jwtPayload, done) => {
  try {
    const user = await User.findOne({ where: { email: jwtPayload.email } });
    if (!user) {
      done(null, false, { reason: "Invalid token" });
      return;
    }
    done(null, user);
  } catch (err) {
    console.error(`👻${err.message}`);
    done(err);
  }
};

module.exports = (passport) => {
  passport.use("jwt", new JwtStrategy(jwtConfig, jwtVerify));
};
