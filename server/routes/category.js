// Internal imports
const { index, create, remove } = require("../controller/CategoryController");

// external imports
const router = require("express").Router();

router.get("/", index);

router.post("/", create);

router.delete("/:id", remove);

module.exports = router;
