const express = require('express')
const pizzaController = require("../service/pizza");
const Response = require("../help/Response")


class pizza {
    static createPizzas(req, res) {
        pizzaController.createpizza(req.body.name,req.body.picture, req.body.price, req.body.ingridients);
        return res.json(new Response("200", "Pizza sacsessful added"))
    }
    static deletePizzas(req, res) {
        pizzaController.deletepizza(req.body.id);
        return res.json(new Response("200", "Pizza sacsessful deleted"))
    }
    static allPizzas(req, res) {
        let y = pizzaController.allpizzas()
         return res.json(y)
        
    }
}

module.exports = pizza

