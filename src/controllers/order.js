const express = require('express')
const orderService = require("../service/order");
const Response = require("../help/Response")


class orderController {
    async addOrder(req,res){
       await orderService.createOrder(req.body.user,req.body.basket,req.body.adress,req.body.delivery,req.body.status,req.body.promocode)
        return res.json(new Response("200", "Promocde sacsessful added"))
    }


    async newPromocode (req, res) {
       await orderService.newPromocode(req.body.id, req.body.promocode)
        return res.json(new Response("200", "Promocde sacsessful added"))
    }
    async orderList (req, res) {
        return await res.json(await orderService.orderList())
    }
    async userAndOrder (req, res) {
       return await res.json(await orderService.userAndOrder())
    
    }
}
module.exports = new orderController()