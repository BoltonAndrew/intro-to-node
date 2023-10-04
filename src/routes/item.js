const { Router } = require("express");
const {
  createItem,
  readItem,
  readItems,
  updateItem,
  deleteItem,
} = require("../controllers/item.js");

const router = Router();

router.post("/", createItem);
router.get("/", readItem);
router.get("/multiple", readItems);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
