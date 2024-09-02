var express = require("express");
const { userController } = require("../src/user/userController");
var router = express.Router();

/* GET home page. */
router.get("/", userController.home);

module.exports = router;
