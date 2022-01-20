const sequelize = require("sequelize");
<<<<<<< HEAD
const basket = require("../repository/basket");

class basket {
    async addPromocode(id, promocode){
        return await pizzas.basket(id, promocode)
    }
}

module.exports = new basket()
=======
const basketService = require("../repository/basket");
const pizzas = require("../repository/pizza");
const NotFound = require("../errors/NotFound");
const Forbidden = require("../errors/Forbidden");

class pizzaBaskets {
    async allBaskets() {
        return await basketService.allBaskets();
    }
    async userBaskets(userId) {
        return await basketService.userBaskets(userId);
    }
    async add(pizzaId, amount, userId, basket) {
        if ((await pizzas.findpizzaByID(pizzaId)) == null) {
            throw new NotFound("pizza  does not exist");
        }
        let price = await pizzas.findPriceofPizza(pizzaId);
        price = price * amount;
        return await basketService.addPizza(
            pizzaId,
            price,
            amount,
            userId,
            basket
        );
    }
    async update(id, pizzaId, amount, userId, basket) {
        const findId = await basketService.findId(id);
        if (findId == null) {
            throw new NotFound("id  does not exist");
        }
        if (findId.user != userId) {
            throw new Forbidden("access denied");
        }
        if ((await pizzas.findpizzaByID(pizzaId)) == null) {
            throw new NotFound("pizza  does not exist");
        }
        let price = await pizzas.findPriceofPizza(pizzaId);
        price = price * amount;
        return await basketService.update(
            id,
            pizzaId,
            amount,
            price,
            userId,
            basket
        );
    }
    async delete(id, userId) {
        const findId = await basketService.findId(id);
        if (findId == null) {
            throw new NotFound("Incorrect values");
        }
        if (findId.user != userId) {
            throw new Forbidden("access denied");
        }
        return await basketService.deletePizza(id);
    }
    async price(userId, basket) {
        return await basketService.findPriceofPizza(userId, basket);
    }
}

module.exports = new pizzaBaskets();
>>>>>>> dev
