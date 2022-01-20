const { check } = require("express-validator");

module.exports = {
    userBaskets: [
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
    ],
    add: [
        check("pizzaId", "pizzaId empty").notEmpty(),
        check("pizzaId", "pizzaId  not Int").isInt(),
        check("amount", "amount empty").notEmpty(),
        check("amount", "amount  not Int").isInt(),
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
        check("basket", "basket empty").notEmpty(),
        check("basket", "basket  not Int").isInt(),
    ],
    update: [
        check("id", "id empty").notEmpty(),
        check("id", "id  not Int").isInt(),
        check("pizzaId", "pizzaId empty").notEmpty(),
        check("pizzaId", "pizzaId  not Int").isInt(),
        check("amount", "amount empty").notEmpty(),
        check("amount", "amount  not Int").isInt(),
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
        check("basket", "basket empty").notEmpty(),
        check("basket", "basket  not Int").isInt(),
    ],
    delete: [
        check("id", "id empty").notEmpty(),
        check("id", "id  not Int").isInt(),
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
    ],
};
