const router = require("express").Router();

// internal imports
const {
  index,
  create,
  remove,
} = require("../controller/TransactionController");

router.get("/", index);

router.post("/", create);

router.delete("/:id", remove);

module.exports = router;
