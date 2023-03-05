const express = require("express");
const { updateuser } = require("../controlers/user.update.controler");
const router = express.Router();
module.exports = router;

router.route("/:id").get().patch(updateuser);
