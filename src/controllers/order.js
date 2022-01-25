const orderService = require("../service/order");
const sequelize = require("../models/sequelize");
const validator = require("express-validator");
const Response = require("../help/Response");
const PreconditionFailed = require("../errors/PreconditionFailed");

class Order {
    async addOrder(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            console.log();
            await orderService.createOrder(
                req.body.userId,
                req.body.basket,
                req.body.adress,
                req.body.delivery,
                req.body.status,
                req.body.promocode
            );
            return res.json(new Response("200", "Order added"));
        } catch (e) {
            next(e);
        }
    }

    async addPromocode(req, res, next) {
        try {
            console.log(req.body.id, req.body.userId, req.body.promocode);
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }

            await orderService.addPromocode(
                req.body.id,
                req.body.userId,
                req.body.promocode
            );
            return res.json(new Response("200", "Promocde sacsessful added"));
        } catch (e) {
            next(e);
        }
    }
    async orderList(req, res, next) {
        try {
            return await res.json(await orderService.orderList(req.query.page));
        } catch (e) {
            next(e);
        }
    }
    async userAndOrder(req, res, next) {
        try {
            return await res.json(await orderService.userAndOrder());
        } catch (e) {
            next(e);
        }
    }
    async bestUsers(req, res, next) {
        try {
            let users = await sequelize.query(
                "SELECT user FROM orders GROUP BY user HAVING count(*)>=3"
            );
            let avg = await sequelize.query("SELECT * FROM orders ");
            let avgCheck = 0;
            for (let k = 0; avg[0].length > k; k++) {
                avgCheck += avg[0][k].price;
            }
            avgCheck = avgCheck / avg[0].length;

            for (let i = 0; users[0].length > i; i++) {
                let user = users[0][i].user;
                let avgUser = 0;
                let price = await sequelize.query(
                    "SELECT * FROM orders WHERE user = '" + user + "'"
                );
                for (let j = 0; price[0].length > j; j++) {
                    avgUser += price[0][j].price;
                }
                avgUser = avgUser / price[0].length;
                if (avgUser > avgCheck) {
                    res.send({ userId: user });
                }
            }
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Order();
