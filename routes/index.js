var express = require("express");
var router = express.Router();
// var indexCtrl = require("../controller/indexController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hello World" });
});

module.exports = router;
