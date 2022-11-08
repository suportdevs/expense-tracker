
function index(req, res) {
  res.status(200).json({ message: "tested" });
}

module.exports = {
  index,
};
