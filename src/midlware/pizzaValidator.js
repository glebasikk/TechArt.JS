const { check } = require("express-validator");

module.exports = {
    addPizza: [
        check("name", "name  empty").notEmpty(),
        check("name", "name  is not String").isString(),
        check("picture", "picture empty ").notEmpty(),
        check("picture", "picture is not Int  ").isInt(),
        check("ingridients", "ingridients empty").notEmpty(),
        check("ingridients", "ingridients  is not String").isString(),
        check("price", "price  empty").notEmpty(),
        check("price", "price  not Float").isFloat(),
    ],
    delPizza: [
        check("id", "id  empty").notEmpty(),
        check("id", "id  not Int").isInt(),
    ],
    updatePizza: [
        check("id", "id  empty").notEmpty(),
        check("id", "id  not Int").isInt(),
        check("ingridients", "ingridients empty").notEmpty(),
    ],
    findbyPk: [
        check("id", "id  empty").notEmpty(),
        check("id", "id  not Int").isInt(),
    ],
};
