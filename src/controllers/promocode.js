const express = require("express");
const promocodeService = require("../service/promocode");
const Response = require("../help/Response");
const validator = require("express-validator");

class promocodeController {
    addPromocode(req, res) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                return res.json(err);
            }
            promocodeService.addPromocode(
                req.body.promocode,
                req.body.discount,
                req.body.expires
            );
            return res.json(new Response("200", "Promocde sacsessful added"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
}
module.exports = new promocodeController();
