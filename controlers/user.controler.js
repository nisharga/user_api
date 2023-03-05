const user = require("../user.json");

module.exports.user = (req, res) => {
  const { limit } = req.query;

  res.send(user.slice(0, limit));
};
