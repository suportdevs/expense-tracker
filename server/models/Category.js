// external imports
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        default: "rgb(255, 99, 132)"
    }
}, timestamps);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;