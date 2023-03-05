const user = require("../user.json");

module.exports.saveuser = (req, res) => {
  user.push(req.body);
  res.send(user);
};
