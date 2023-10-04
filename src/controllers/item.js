const { Item, Category } = require("../models");

async function createItem(req, res, next) {
  try {
    await Item.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function readItem(req, res, next) {
  try {
    const query = req.query || {};
    const result = await Item.findOne({ where: query });
    if (!result) {
      res.status(404).send("No items found");
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    next(error);
  }
}

async function readItems(req, res, next) {
  try {
    const query = req.query || {};
    const results = await Item.findAll({ where: query });
    if (results.length === 0) {
      res.status(404).send("No items found");
    } else {
      res.status(200).send(results);
    }
  } catch (error) {
    next(error);
  }
}

async function updateItem(req, res, next) {
  try {
    const updatedResponse = await Item.update(req.body, {
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

async function deleteItem(req, res, next) {
  try {
    const deletedResponse = await Item.destroy({
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

async function setCategory(req, res, next) {
  try {
    const item = await Item.findByPk(req.params.id);
    const category = await Category.findOne({ where: req.body });
    item.addCategory(category);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function getItemWithCategory(req, res, next) {
  try {
    const item = await Item.findByPk(req.params.id, { include: Category });
    res.status(200).send(item);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createItem,
  readItem,
  readItems,
  updateItem,
  deleteItem,
  setCategory,
  getItemWithCategory,
};
