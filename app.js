const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");

const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter");

app.use (express.static("public"))

app.use (express.urlencoded({ extended: false }));
app.use (express.json());
app.use (methodOverride("_method"));

// Configuramos ejs como template engine
app.set ("view engine", "ejs");

// Configuramos la carpeta de vistas
app.set ("views", "./views")

app.use ("/", mainRouter);
app.use ("/productos", productsRouter);

// app.use((req, res, next) => {
//     res.status(404).render("not-found")
// });


const port = process.env.PORT || 3000;
app.listen (port, () => console.log("Esta corriendo el puerto "+port));