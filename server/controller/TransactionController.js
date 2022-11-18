//internal imports
const Transaction = require("../models/Transaction");

async function index(req, res) {
  try {
    const data = await Transaction.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json({ message: "Server side error!" + err });
  }
}

async function create(req, res) {
  try {
    const data = await new Transaction(req.body);
    await data.save();
    res.status(200).json({ message: "Record created successfull." });
  } catch (err) {
    res.status(400).json({ message: "Server side error!" + err });
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

async function getLabels(req, res) {
  try {
    Transaction.find({})
      .populate("category", "name color _id")
      .exec((err, data) => {
        if (err) {
          res.status(400).json({ message: `Error ${err}` });
        } else {
          res.status(200).json(data);
        }
      });
  } catch (err) {
    res.status(500).json({ message: "server side error!" });
  }
}

module.exports = {
  index,
  create,
  remove,
  getLabels,
};
