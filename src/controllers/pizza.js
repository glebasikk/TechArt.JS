const express = require('express')
const pizzaService = require("../service/pizza");
const Response = require("../help/Response")
const validator = require('express-validator')

class pizzaController {
    async createPizzas(req, res) {
        const err = validator.validationResult(req)
        if (!err.isEmpty()){
            return res.json(err)
        }
        pizzaService.createPizza(req.body.name,req.body.picture, req.body.price, req.body.ingridients);
        return res.json(new Response("200", "Pizza sacsessful added"))
    }
    async deletePizzas(req, res) {
        const err = validator.validationResult(req)
        if (!err.isEmpty()){
            return res.json(err)
        }
        pizzaService.deletePizza(req.body.id);
        return res.json(new Response("200", "Pizza sacsessful deleted"))
    }
     async all(req, res) {
        let pizzaList = await pizzaService.allpizzas()
        return res.json(pizzaList)
    }
     async updateIngrdients(req,res){
        const err = validator.validationResult(req)
        if (!err.isEmpty()){
            return res.json(err)
        }
        await pizzaService.updatePizzaIngridients(req.body.id,req.body.ingridients)
        return res.json(new Response("200", "Ingridients sacsessful updated"))
     }
     async findbyPk(req,res){
        const err = validator.validationResult(req)
        if (!err.isEmpty()){
            return res.json(err)
        }
         let y = await pizzaService.findByPK(req.body.id)
         return res.json(y)
     }
    

}

module.exports = new pizzaController()

