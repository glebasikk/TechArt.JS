const express = require("express");
const pizza = require("../controllers/pizza");
const promocode = require("../controllers/promocode");
const order = require("../controllers/order");
const router = express.Router();
const pizzaBasket = require("../controllers/basket");
const auth = require("../controllers/auth")
const authMidleware = require('../midlware/auth')
const roleMidleware = require('../midlware/role')
const registrationValidtor = require('../midlware/regitrationValidator')
const loginValidtor = require('../midlware/loginValidator')
const pizzaValidtor = require('../midlware/pizzaValidator')
// Pizza
router.post("/addPizza",pizzaValidtor.addPizza,authMidleware,roleMidleware(['admin']), pizza.createPizzas)
router.post("/delPizza",pizzaValidtor.delPizza,authMidleware,roleMidleware(['admin']), pizza.deletePizzas)
router.post("/updateIngredients",pizzaValidtor.updatePizza,authMidleware,roleMidleware(['admin']), pizza.updateIngrdients)
router.post("/find",authMidleware,authMidleware,pizzaValidtor.findbyPk, pizza.findbyPk)
router.get("/",authMidleware, pizza.all)
//promocode
router.post("/Promocode", promocode.addPromocode)
//order
router.post("/newPromocode", order.newPromocode)
router.post("/createOrder", order.addOrder)
router.get("/orderList", order.orderList)
router.get("/userAndOrder", order.userAndOrder)
//pizzaBasket
router.get("/pizza", pizzaBasket.all)
router.post("/addInBasket", pizzaBasket.add)
router.post("/updateBasket", pizzaBasket.update)
router.post("/delitePizzaFromBasket", pizzaBasket.delete)
//
//auth
router.post('/registration',registrationValidtor , auth.registration)
router.post('/login',loginValidtor, auth.login)
router.get('/logout',authMidleware, auth.logout)
router.get('/deleteAccount',authMidleware, auth.deleteAccount)


module.exports = router