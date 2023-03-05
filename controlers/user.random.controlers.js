const user = require("../user.json");
module.exports.randomuser = (req, res) => {
  res.send(user[Math.floor(Math.random() * 5)]);
};
