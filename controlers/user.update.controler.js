const user = require("../user.json");
module.exports.updateuser = (req, res) => {
  const { id } = req.params;
  const filter = { Id: id };
  const data = req.body;
  const newUser = user.find((val) => val.id == id);
  newUser.name = req.body.name;
  res.send(newUser);
};
