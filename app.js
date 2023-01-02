const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require ("./routes/mainRouter")


app.use (express.static("public"))

app.use ("/", mainRouter);


const port = process.env.PORT || 3000;
app.listen (port, () => console.log("Esta corriendo el puerto "+port));