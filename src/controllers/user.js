const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

async function createUser(req, res, next) {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.status(201).send(token);
  } catch (error) {
    next(error);
  }
}

async function readUser(req, res, next) {
  try {
    const token = jwt.sign({ id: req.user.id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ user: req.user, token });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const updatedResponse = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedResponse[0] > 0) {
      res.sendStatus(200);
    } else {
      throw new Error("Nothing updated");
    }
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const deletedResponse = await User.destroy({
      where: { id: req.params.id },
    });
    if (deletedResponse > 0) {
      res.sendStatus(200);
    } else {
      throw new Error("Nothing deleted");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
