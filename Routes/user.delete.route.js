const express = require("express");
const { deleteuser } = require("../controlers/user.delete.route");
const router = express.Router();
module.exports = router;

router.route("/:id").delete(deleteuser);
