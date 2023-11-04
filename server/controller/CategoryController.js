const Category = require("../models/Category");

async function index(req, res) {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(402).json({ message: "There are server side error!" });
  }
}

async function create(req, res) {
  try {
    const category = await new Category(req.body);
    await category.save();
    res.status(200).json({ message: "Record inserted successfull." });
  } catch (err) {
    res.status(400).json({ message: "Error while creating!" + err });
  }
}

async function remove(req, res) {
  try {
    const category = await Category.findByIdAndDelete({
      _id: req.params.id,
    }).clone();
    res.status(200).json({ message: "Recored deleted successfull." });
  } catch (err) {
    res.status(400).json({ message: "There are server side error!" });
  }
}

module.exports = {
  index,
  create,
  remove,
};
