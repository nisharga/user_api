const express = require("express");
const { user, limituser } = require("../controlers/user.controler");
const router = express.Router();
module.exports = router;

router.route("/").get(user);
