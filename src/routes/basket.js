const express = require("express");
const router = express.Router();
const pizzaBasket = require("../controllers/basket");
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");
const basketValidator = require("../midlware/basketValidator");

router.get(
    "/allBaskets",
    authMidleware,
    roleMidleware("admin"),
    pizzaBasket.allBaskets
);
router.post(
    "/userBaskets",
    authMidleware,
    basketValidator.userBaskets,
    pizzaBasket.userBaskets
);
router.post(
    "/addInBasket",
    authMidleware,
    basketValidator.add,
    pizzaBasket.add
);
router.post(
    "/updateBasket",
    authMidleware,
    basketValidator.update,
    pizzaBasket.update
);
router.post(
    "/deletePizzaFromBasket",
    authMidleware,
    basketValidator.delete,
    pizzaBasket.delete
);

module.exports = router;
