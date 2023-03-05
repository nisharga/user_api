const express = require("express");
const { randomuser } = require("../controlers/user.random.controlers");
const router = express.Router();
module.exports = router;

router.route("/").get(randomuser).post();
