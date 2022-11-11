//internal imports
const Transaction = require("../models/Transaction");

async function index(req, res) {
  try {
    const data = await new Transaction.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json({ message: "Server side error!" });
  }
}

async function create(req, res) {
  try {
    const data = await new Transaction(req.body);
    await data.save();
    res.status(200).json({ message: "Record created successfull." });
  } catch (err) {
    res.status(400).json({ message: "Server side error!" });
  }
}

async function remove(req, res) {
  try {
    const data = await Transaction.findByIdAndDelete({
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
