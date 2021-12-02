const express = require("express");
const pizza = require("../controllers/pizza");
const router = express.Router();

router.post("/addPizza", pizza.createPizzas)
router.post("/delPizza", pizza.deletePizzas)
router.get("/1", pizza.allPizzas)

module.exports = router

