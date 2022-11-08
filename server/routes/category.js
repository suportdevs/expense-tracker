// Internal imports
const { index } = require("../controller/CategoryController");

// external imports
const router = require("express").Router();

router.route("categories")
    .get("/", index);

module.exports = router;
