const express = require("express");
const path = require("path");
const pizzas = require("./models/pizza");
const pizzaRouter = require("./routes/pizza");
const app = express();
const auth = require("./repository/role");
const multer = require("multer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(multer({ dest: "uploads" }).single("filedata"));
app.use(pizzaRouter);

async function start() {
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`);
    });
}

start();
