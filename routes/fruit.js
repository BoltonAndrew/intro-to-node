const { Router } = require("express");
const router = Router();
const filteredSearch = require("../controllers/fruit.js");
const capitalize = require("../middleware");
const Fruit = require("../models/Fruit.js");

// const fruitDB = []; // {name: "Apple", price: 0.99};

router.get("/", async (req, res) => {
  const fruits = await Fruit.findAll();
  res.status(200).send(fruits);
});

router.get("/nameSearch", filteredSearch);

router.get("/priceSearch", filteredSearch);

router.post("/", capitalize, async (req, res) => {
  const fruit = await Fruit.create(req.body);
  res.status(201).send(fruit);
});

router.patch("/:id", async (req, res) => {
  const updatedRes = await Fruit.update(req.body, {
    where: { id: req.params.id },
  });
  if (updatedRes[0] > 0) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  const deletedRes = await Fruit.destroy({ where: { id: req.params.id } });
  if (deletedRes > 0) {
    res.sendStatus(200);
  } else {
    res.status(500).send("Didn't delete");
  }
});

module.exports = router;
