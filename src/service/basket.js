const sequelize = require("sequelize");
const basket = require("../repository/basket");

class basket {
    async addPromocode(id, promocode){
        return await pizzas.basket(id, promocode)
    }
}

module.exports = new basket()