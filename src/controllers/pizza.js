const pizzaService = require("../service/pizza");
const Response = require("../help/Response");
const validator = require("express-validator");
const sequelize = require("../models/sequelize");
const PreconditionFailed = require("../errors/PreconditionFailed");
const transaction = require("../repository/transaction");

class Pizza {
    async createPizzas(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            console.log(req.body);
            pizzaService.createPizza(
                req.body.name,
                req.body.picture,
                req.body.price,
                req.body.ingridients
            );
            return res.json(new Response("200", "Pizza sacsessful added"));
        } catch (e) {
            next(e);
        }
    }
    async deletePizzas(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            pizzaService.deletePizza(req.body.id);
            return res.json(new Response("200", "Pizza sacsessful deleted"));
        } catch (e) {
            next(e);
        }
    }
    async all(req, res, next) {
        try {
            let pizzaList = await pizzaService.allPizzas(req.query.page);
            return res.json(pizzaList);
        } catch (e) {
            next(e);
        }
    }
    async updateIngrdients(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            await pizzaService.updatePizzaIngridients(
                req.body.id,
                req.body.ingridients
            );
            return res.json(
                new Response("200", "Ingridients sacsessful updated")
            );
        } catch (e) {
            next(e);
        }
    }
    async findbyPk(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            return res.json(await pizzaService.findByPK(req.body.id));
        } catch (e) {
            next(e);
        }
    }
    async transaction(req, res, next) {
        await transaction.trans(req.body.id);
        return res.json(new Response("200", "transaction complete"));
    }

    async bestPizza(req, res, next) {
        try {
            let today = new Date();
            today.setMonth(today.getMonth() - 1);
            let todayParse = Date.parse(today);
            let order = await sequelize.query(
                "SELECT * FROM orders WHERE date>'" + todayParse + "'"
            );
            let flag = false;
            let id = 0;
            let num = 0;
            order = order[0];
            let mas = [];
            for (let i = 0; order.length > i; i++) {
                let basketNum = order[i].basket;
                let user = order[i].user;
                let basket = await sequelize.query(
                    "SELECT * FROM basket WHERE user = '" +
                        user +
                        "' AND basket = '" +
                        basketNum +
                        "'"
                );
                basket = basket[0];
                for (let j = 0; basket.length > j; j++) {
                    flag = false;
                    let pizza = basket[j].pizza_id;
                    let amount = basket[j].amount;
                    for (let k = 0; mas.length > k; k++) {
                        if (mas[k].pizzId === pizza) {
                            flag = true;
                            mas[k].pizzaAmount = mas[k].pizzaAmount + amount;
                        }
                    }
                    if (!flag) {
                        mas.push({
                            pizzId: pizza,
                            pizzaAmount: amount,
                        });
                    }
                }
                for (let k = 0; mas.length > k; k++) {
                    if (mas[k].pizzaAmount > num) {
                        num = mas[k].pizzaAmount;
                        id = mas[k].pizzId;
                    }
                }
            }
            res.send({ id: id });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Pizza();
