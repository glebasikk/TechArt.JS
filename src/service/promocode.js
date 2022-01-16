const sequelize = require("sequelize");
const promocodeRepo = require("../repository/promocode");

class promocodes {
    async addPromocode( promocode, discount){
        return await promocodeRepo.addPromocode( promocode, discount)
    }
}

module.exports = new promocodes()