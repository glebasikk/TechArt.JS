const promocodeService = require("../service/promocode");
const Response = require("../help/Response");
const validator = require("express-validator");
const PreconditionFailed = require("../errors/PreconditionFailed");

class Promocode {
    addPromocode(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            promocodeService.addPromocode(
                req.body.promocode,
                req.body.discount,
                req.body.expires
            );
            return res.json(new Response("200", "Promocde sacsessful added"));
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Promocode();
