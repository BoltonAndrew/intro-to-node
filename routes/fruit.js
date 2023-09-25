const { Router } = require("express");
const router = Router();
const filteredSearch = require("../controllers/fruit.js");
const capitalize = require("../middleware");

const fruitDB = []; // {name: "Apple", price: 0.99};

router.get("/", (req, res) => {
  res.status(200).send(fruitDB);
});

router.get("/nameSearch", filteredSearch);

router.get("/priceSearch", filteredSearch);

router.post("/", capitalize, (req, res) => {
  fruitDB.push(req.body);
  res.sendStatus(201);
});

router.patch("/:index", (req, res) => {
  fruitDB[req.params.index] = {
    ...fruitDB[req.params.index],
    price: req.body.price,
  };
  res.sendStatus(204);
});

router.delete("/:index", (req, res) => {
  fruitDB.splice(req.params.index, 1);
  res.sendStatus(205);
});

module.exports = router;
