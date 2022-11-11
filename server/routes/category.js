// Internal imports
const { index, create } = require("../controller/CategoryController");

// external imports
const router = require("express").Router();

router.get("/", index);

router.post('/', create)

module.exports = router;
