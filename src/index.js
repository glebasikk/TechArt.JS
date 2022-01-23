const express = require("express");
const authRouter = require("./routes/auth");
const basketRouter = require("./routes/basket");
const orderRouter = require("./routes/order");
const pictureRouter = require("./routes/picture");
const pizzaRouter = require("./routes/pizza");
const promocodeRouter = require("./routes/promocode");
const app = express();
const multer = require("multer");
const error = require("./midlware/error");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(multer({ dest: "uploads" }).single("filedata"));
app.use(authRouter);
app.use(basketRouter);
app.use(orderRouter);
app.use(pictureRouter);
app.use(pizzaRouter);
app.use(promocodeRouter);
app.use(error);

async function start() {
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`);
    });
}

// trans.trans("28");

start();
