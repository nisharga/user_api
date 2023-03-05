const express = require("express");
const { bulkupdate } = require("../controlers/user.bulkupdate.controler");
const router = express.Router();
module.exports = router;

router.route("/").patch(bulkupdate);
