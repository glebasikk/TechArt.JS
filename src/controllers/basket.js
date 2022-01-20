const express = require("express");
const basketController = require("../service/basket");
const Response = require("../help/Response");
const validator = require("express-validator");

class pizzaController {
    async allBaskets(req, res) {
        try {
            let y = await basketController.allBaskets();
            return res.json(y);
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "basket error"));
        }
    }
    async userBaskets(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            let y = await basketController.userBaskets(req.body.userId);
            return res.json(y);
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "basket error"));
        }
    }
    async add(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            basketController.add(
                req.body.pizzaId,
                req.body.amount,
                req.body.userId,
                req.body.basket
            );
            return res.json(new Response("200", "Pizza sacsessful added"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "basket error"));
        }
    }
    async update(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            basketController.update(
                req.body.id,
                req.body.pizzaId,
                req.body.amount,
                req.body.userId,
                req.body.basket
            );
            return res.json(new Response("200", "basket sacsessfully changed"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "basket error"));
        }
    }
    async delete(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            await basketController.delete(req.body.id, req.body.pizzaId);
            return res.json(
                new Response("200", "Pizza sacsessful deleted from the basket")
            );
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "delete error"));
        }
    }
}

module.exports = new pizzaController();
