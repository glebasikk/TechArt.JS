const nodemon = require("nodemon");
const sequelize = require("sequelize");
const promocodes = require("../models/promocode");

class promocode {
    async findPromocode(id) {
        return await promocodes.findOne({ where: { id: id } });
    }
    async addPromocode(promocode, discount, expires) {
        return await promocodes.create({
            promocode: promocode,
            discount: discount,
            expires: expires,
        });
    }
    async discount(id) {
        return await promocodes.max("discount", {
            where: { id: id },
            attributes: ["discount"],
        });
    }
}

module.exports = new promocode();
