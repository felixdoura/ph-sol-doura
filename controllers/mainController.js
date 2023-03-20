const fs = require("fs");
const path = require("path");

const productosFilePath = path.join(__dirname, "../dataBase/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const controller = {

    home : (req, res) => {
        res.render("home", { productos });
    },
}

module.exports = controller;




