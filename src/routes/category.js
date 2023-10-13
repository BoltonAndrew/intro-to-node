const { Router } = require("express");
const {
  createCategory,
  readCategory,
  readCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.js");

const router = Router();

router.post("/", createCategory);
router.get("/", readCategory);
router.get("/multiple", readCategories);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
