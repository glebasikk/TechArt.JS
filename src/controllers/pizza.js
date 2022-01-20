const express = require("express");
const pizzaService = require("../service/pizza");

const Response = require("../help/Response");
const validator = require("express-validator");
const notFound = require("../errors/NotFound");
class pizzaController {
    async createPizzas(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                //return res.json(err)
                throw new notFound("Incorrect values");
                //callback(new notFound('Incorrect values'));
            }

            pizzaService.createPizza(
                req.body.name,
                req.body.picture,
                req.body.price,
                req.body.ingridients
            );
            return res.json(new Response("200", "Pizza sacsessful added"));
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    }
    async deletePizzas(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            pizzaService.deletePizza(req.body.id);
            return res.json(new Response("200", "Pizza sacsessful deleted"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
    async all(req, res) {
        try {
            // throw new notFound("Incorrect values");
            let pizzaList = await pizzaService.allPizzas();
            return res.json(pizzaList);
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
    async updateIngrdients(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            await pizzaService.updatePizzaIngridients(
                req.body.id,
                req.body.ingridients
            );
            return res.json(
                new Response("200", "Ingridients sacsessful updated")
            );
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
    async findbyPk(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            return res.json(await pizzaService.findByPK(req.body.id));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
}

module.exports = new pizzaController();
