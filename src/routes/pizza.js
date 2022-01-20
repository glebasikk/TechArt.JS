const express = require("express");
const pizza = require("../controllers/pizza");
const promocode = require("../controllers/promocode");
const order = require("../controllers/order");
const router = express.Router();
const pizzaBasket = require("../controllers/basket");
const auth = require("../controllers/auth");
const picture = require("../controllers/picture");
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");
const registrationValidtor = require("../midlware/regitrationValidator");
const loginValidtor = require("../midlware/loginValidator");
const pizzaValidtor = require("../midlware/pizzaValidator");
const promocodeValidator = require("../midlware/promocdeValidator");
const basketValidator = require("../midlware/basketValidator");
const orderValidator = require("../midlware/orderValidator");

<<<<<<< HEAD
router.post("/addPizza", pizza.createPizzas)
router.post("/delPizza", pizza.deletePizzas)
router.post("/update", pizza.updateIngrdients)
router.post("/find", pizza.findbyPk)
router.get("/", pizza.all)

module.exports = router


=======
// // Pizza
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
router.get("/", authMidleware, roleMidleware("admin"), pizza.all);
//promocode
router.post(
    "/Promocode",
    authMidleware,
    promocodeValidator,
    roleMidleware("admin"),
    promocode.addPromocode
);
//order
router.post(
    "/addPromocode",
    authMidleware,
    orderValidator.addOrder,
    order.addPromocode
);
router.post(
    "/createOrder",
    authMidleware,
    orderValidator.addPromocode,
    order.addOrder
);
router.get("/orderList", authMidleware, order.orderList);
router.get(
    "/userAndOrder",
    authMidleware,
    roleMidleware("admin"),
    order.userAndOrder
);
//pizzaBasket
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
//auth
router.post("/registration", registrationValidtor, auth.registration);
router.post("/login", loginValidtor, auth.login);
router.get("/logout", authMidleware, auth.logout);
router.get("/deleteAccount", authMidleware, auth.deleteAccount);
// router.post("/download", auth.download);
router.post("/upload", authMidleware, roleMidleware("admin"), picture.upload);

module.exports = router;
>>>>>>> dev
