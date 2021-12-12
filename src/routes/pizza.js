const express = require("express");
const pizza = require("../controllers/pizza");
const router = express.Router();

router.post("/addPizza", pizza.createPizzas)
router.post("/delPizza", pizza.deletePizzas)
router.post("/update", pizza.updateIngrdients)
router.post("/find", pizza.findbyPk)
router.get("/", pizza.all)

module.exports = router


