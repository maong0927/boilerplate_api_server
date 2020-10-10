const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.join = async (body) => {
  const { email, password, name } = body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
      email,
      password: hashedPassword,
      name,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
