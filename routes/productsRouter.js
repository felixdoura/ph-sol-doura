const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productsController = require("../controllers/productsController");

router.get ("/", productsController.home);

router.get ("/detail/:id", productsController.detail);

module.exports = router;