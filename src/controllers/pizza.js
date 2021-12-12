const express = require('express')
const pizzaService = require("../service/pizza");
const Response = require("../help/Response")


class pizzaController {
     createPizzas(req, res) {
        pizzaService.createpizza(req.body.name,req.body.picture, req.body.price, req.body.ingridients);
        return res.json(new Response("200", "Pizza sacsessful added"))
    }
     deletePizzas(req, res) {
        pizzaService.deletepizza(req.body.id);
        return res.json(new Response("200", "Pizza sacsessful deleted"))
    }
     async all(req, res) {
        let y = await pizzaService.allpizzas()
         return res.json(y)
    }
     async updateIngrdients(req,res){
         pizzaService.updatePizzaIngridients(req.body.id,req.body.ingridients)
         return res.json(new Response("200", "Ingridients sacsessful updated"))
     }
     async findbyPk(req,res){
         let y = await pizzaService.findByPK(req.body.id)
         return res.json(y)
     }
    

}

module.exports = new pizzaController()

