const Category = require("../models/Category");

function index(req, res) {
  res.status(200).json({ message: "tested" });
}

async function create(req, res){
  try{
    const category = await new Category(req.body);
    await category.save();
    res.status(200).json({message: "Record inserted successfull."});
  } catch(err){
    res.status(400).json({message: "Error while creating!" + err});
  }
}

module.exports = {
  index,
  create
};
