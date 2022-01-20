const express = require("express");
const orderService = require("../service/order");
const Response = require("../help/Response");

class orderController {
    async addOrder(req, res) {
        try {
            await orderService.createOrder(
                req.body.userId,
                req.body.basket,
                req.body.adress,
                req.body.delivery,
                req.body.status,
                req.body.promocode
            );
            return res.json(new Response("200", "Promocde sacsessful added"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }

    async addPromocode(req, res) {
        try {
            await orderService.addPromocode(
                req.body.id,
                req.body.userId,
                req.body.promocode
            );
            return res.json(new Response("200", "Promocde sacsessful added"));
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
    async orderList(req, res) {
        try {
            return await res.json(await orderService.orderList());
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
    async userAndOrder(req, res) {
        try {
            return await res.json(await orderService.userAndOrder());
        } catch (e) {
            console.log(e);
            return res.json(new Response("400", "Promocode error"));
        }
    }
}
module.exports = new orderController();
