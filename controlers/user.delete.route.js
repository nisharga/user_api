const user = require("../user.json");
module.exports.deleteuser = (req, res) => {
  const { id } = req.params;
  const newUser = user.filter((val) => val.id != id);
  res.send(newUser);
};
