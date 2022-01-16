const express = require('express')
const promocodeService = require("../service/promocode");
const Response = require("../help/Response")


class promocodeController {
    addPromocode (req, res) {
        promocodeService.addPromocode( req.body.promocode, req.body.discount)
        return res.json(new Response("200", "Promocde sacsessful added"))
   }
}
module.exports = new promocodeController()