const { Category } = require("../models");

async function createCategory(req, res, next) {
  try {
    await Category.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function readCategory(req, res, next) {
  try {
    const query = req.query || {};
    const result = await Category.findOne({ where: query });
    if (!result) {
      res.status(404).send("No categories found");
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    next(error);
  }
}

async function readCategories(req, res, next) {
  try {
    const query = req.query || {};
    const results = await Category.findAll({ where: query });
    if (results.length === 0) {
      res.status(404).send("No categories found");
    } else {
      res.status(200).send(results);
    }
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const updatedResponse = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedResponse[0] === 0) {
      res.status(304).send("Not updated");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const deletedResponse = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deletedResponse === 0) {
      res.status(409).send("Not deleted");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCategory,
  readCategory,
  readCategories,
  updateCategory,
  deleteCategory,
};
