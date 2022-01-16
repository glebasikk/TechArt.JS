const express = require('express')
const basketController = require("../service/basket");
const Response = require("../help/Response")

class pizzaController {
   async all(req, res) {
      let y = await basketController.all()
      return res.json(y)
   }
   async add(req, res) {
     
      basketController.add(req.body.id, req.body.amount, req.body.user,req.body.basket);
      return res.json(new Response("200", "Pizza sacsessful added"))
   }
   async update(req, res) {
      basketController.update(req.body.id,req.body.pizzaID, req.body.amount, req.body.user,req.body.basket);
      return res.json(new Response("200", "amount sacsessfully changed"))
   }
   async delete(req, res) {
      await basketController.delete(req.body.id);
      return res.json(new Response("200", "Pizza sacsessful deleted from the basket"))
   }
}

module.exports = new pizzaController()
