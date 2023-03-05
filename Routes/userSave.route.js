const express = require("express");
const { saveuser } = require("../controlers/user.save.controler");
const router = express.Router();
module.exports = router;

router.route("/").get().post(saveuser);
