const router = require("express").Router();

// internal imports
const {
  index,
  create,
  remove,
  getLabels,
} = require("../controller/TransactionController");

router.get("/", index);

router.post("/", create);

router.delete("/:id", remove);

router.get("/label", getLabels);

module.exports = router;
