const sequelize = require("sequelize");
const promocodeRepo = require("../repository/promocode");
const PreconditionFailed = require("../errors/PreconditionFailed");
const NotAcceptable = require("../errors/NotAcceptable");

class promocodes {
    async addPromocode(promocode, discount, expires) {
        let promo = await promocodeRepo.findPromocode(promocode);
        if (promo != null) {
            console.log(promo.id);
            throw new NotAcceptable("promocode exist");
        }
        let today = new Date();
        if (Date.parse(expires) < Date.parse(today)) {
            throw new PreconditionFailed("incorrect date");
        }
        return await promocodeRepo.addPromocode(promocode, discount, expires);
    }
}

module.exports = new promocodes();
