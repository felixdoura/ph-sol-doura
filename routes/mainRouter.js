const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get ("/", mainController.home);
router.get ("/contact", mainController.contact);

module.exports = router