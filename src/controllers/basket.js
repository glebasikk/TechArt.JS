const basketService = require("../service/basket");
const Response = require("../help/Response");
const validator = require("express-validator");
const PreconditionFailed = require("../errors/PreconditionFailed");

class Pizza {
    async allBaskets(req, res, next) {
        try {
            let userList = await basketService.allBaskets();
            return res.json(userList);
        } catch (e) {
            next(e);
        }
    }
    async userBaskets(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            let userList = await basketService.userBaskets(req.body.userId);
            return res.json(userList);
        } catch (e) {
            next(e);
        }
    }
    async add(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            basketService.add(
                req.body.pizzaId,
                req.body.amount,
                req.body.userId,
                req.body.basket
            );
            return res.json(new Response("200", "Pizza sacsessful added"));
        } catch (e) {
            next(e);
        }
    }
    async update(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            basketService.update(
                req.body.id,
                req.body.pizzaId,
                req.body.amount,
                req.body.userId,
                req.body.basket
            );
            return res.json(new Response("200", "basket successfully changed"));
        } catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            await basketService.delete(req.body.id, req.body.userId);
            return res.json(
                new Response(
                    "200",
                    "Pizza successfully deleted from the basket"
                )
            );
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Pizza();
