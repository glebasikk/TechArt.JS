const sequelize = require("sequelize");
<<<<<<< HEAD
const baskets    = require("../models/basket");

class basket {
    async  addPromocode(id, promocde){
        return await  basket.update(
          {
            promocde: promocde
          },
          {where:{id: id}})
    }
}

module.exports = new basket()





//id,address,delivery,status,promocode,price,discount
=======
const pizzaBasket = require("../models/basket");
const pizza = require("./pizza");

class pizzaBaskets {
    async allBaskets() {
        return await pizzaBasket.findAll();
    }

    async userBaskets(user) {
        return await pizzaBasket.findAll({ where: { user: user } });
    }

    async createBasket(user) {
        return await pizzaBasket.findAll({ where: { user: user } });
    }

    async addPizza(pizzaID, price, amount, user, basket) {
        return await pizzaBasket.create({
            pizza_id: pizzaID,
            price: price,
            amount: amount,
            user: user,
            basket: basket,
        });
    }

    async findId(id) {
        return await pizzaBasket.findOne({ where: { id: id } });
    }

    async update(id, pizzaID, amount, price, user, basket) {
        return await pizzaBasket.update(
            {
                pizza_id: pizzaID,
                amount: amount,
                price: price,
                user: user,
                basket: basket,
            },
            { where: { id: id } }
        );
    }

    async deletePizza(id) {
        let x = await pizzaBasket.destroy({ where: { id: id } });
        return await x;
    }

    async userAndBasket(user, basket) {
        return await pizzaBasket.findOne({
            where: { user: user, basket: basket },
        });
    }

    async findPriceofPizza(user, basket) {
        return await pizzaBasket.sum("price", {
            where: { user: user, basket: basket },
            attributes: ["price"],
        });
    }
}

module.exports = new pizzaBaskets();
>>>>>>> dev
