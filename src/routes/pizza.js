const express = require("express");
const pizza = require("../controllers/pizza");
const router = express.Router();
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");
const pizzaValidtor = require("../midlware/pizzaValidator");

router.post(
    "/addPizza",
    authMidleware,
    pizzaValidtor.addPizza,
    roleMidleware("admin"),
    pizza.createPizzas
);
router.post(
    "/delPizza",
    authMidleware,
    roleMidleware("admin"),
    pizzaValidtor.delPizza,
    pizza.deletePizzas
);
router.post(
    "/updateIngredients",
    authMidleware,
    roleMidleware("admin"),
    pizzaValidtor.updatePizza,
    pizza.updateIngrdients
);
router.post("/find", authMidleware, pizzaValidtor.findbyPk, pizza.findbyPk);
router.get("/pizzaList?:page", authMidleware, pizza.all);
router.get("/bestPizza", authMidleware, pizza.bestPizza);

module.exports = router;
