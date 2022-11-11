// external imports
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        default: "rgb(255, 99, 132)"
    }
}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;