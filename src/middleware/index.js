const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

async function hashPass(req, res, next) {
  try {
    if (req.body.password) {
      const salt = parseInt(process.env.SALT);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPass;
    }
    next();
  } catch (error) {
    next(error);
  }
}

async function comparePass(req, res, next) {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });
    const compareCheck = await bcrypt.compare(
      req.body.password,
      req.user.password
    );
    if (!compareCheck) {
      throw new Error("Incorrect credentials");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

async function verifyToken(req, res, next) {
  try {
    const token = req.header("Authorization");
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.user = await User.findByPk(decoded.id);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  hashPass,
  comparePass,
  verifyToken,
};
