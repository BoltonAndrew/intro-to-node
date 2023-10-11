const { Router } = require("express");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.js");
const { hashPass, comparePass, verifyToken } = require("../middleware");
const router = Router();

router.post("/", hashPass, createUser);
router.post("/credential", comparePass, readUser);
router.get("/", verifyToken, readUser);
router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
