const fs = require("fs");
const path = require ("path");

const productsFilePath = path.join(__dirname, "../dataBase/productos.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    // Listado de Productos
    home: (req, res) => {
        res.render ("productos", {productos});
    },

    // Detalle de Productos
    detail: (req, res) => {
        res.render ("productDetail", {producto: productos.find(prod => prod.id == req.params.id)})
    }
}

module.exports = controller;