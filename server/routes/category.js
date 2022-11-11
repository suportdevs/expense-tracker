// Internal imports
const { index } = require("../controller/CategoryController");

// external imports
const router = require("express").Router();

router.get("/", index);

module.exports = router;
