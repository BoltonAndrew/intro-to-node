const Fruit = require("../models/Fruit.js");

const filteredSearch = async (req, res) => {
  const results = await Fruit.findAll({ where: req.query });
  res.status(200).send(results);
};

module.exports = filteredSearch;
