const { check } = require("express-validator");

module.exports = {
    addOrder: [
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
        check("basket", "basket empty").notEmpty(),
        check("basket", "basket  not string").isString(),
        check("adress", "adress empty").notEmpty(),
        check("adress", "adress  not string").isString(),
        check("delivery", "delivery empty").notEmpty(),
        check("delivery", "delivery  not string").isString(),
        check("status", "status empty").notEmpty(),
        check("status", "status  not string").isString(),
    ],
    addPromocode: [
        check("id", "id empty").notEmpty(),
        check("id", "id  not Int").isInt(),
        check("userId", "userId empty").notEmpty(),
        check("userId", "userId  not Int").isInt(),
        check("promocode", "promocode  not Int").isInt(),
        check("promocode", "promocode  not string").isString(),
    ],
};
