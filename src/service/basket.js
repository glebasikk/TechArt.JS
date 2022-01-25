const basketRepo = require("../repository/basket");
const pizzaRepo = require("../repository/pizza");
const NotFound = require("../errors/NotFound");
const Forbidden = require("../errors/Forbidden");

class Pizza {
    async allBaskets() {
        return await basketRepo.allBaskets();
    }
    async userBaskets(userId) {
        return await basketRepo.userBaskets(userId);
    }
    async add(pizzaId, amount, userId, basket) {
        if ((await pizzaRepo.findpizzaByID(pizzaId)) == null) {
            throw new NotFound("pizza  does not exist");
        }
        let price = await pizzaRepo.findPriceofPizza(pizzaId);
        price = price * amount;
        return await basketRepo.addPizza(
            pizzaId,
            price,
            amount,
            userId,
            basket
        );
    }
    async update(id, pizzaId, amount, userId, basket) {
        const findId = await basketRepo.findId(id);
        if (findId == null) {
            throw new NotFound("id  does not exist");
        }
        if (findId.user != userId) {
            console.log(findId.user, userId);
            throw new Forbidden("access denied");
        }
        let pizza = await pizzaRepo.findpizzaByID(1);
        console.log(pizza);
        if (pizza == null) {
            throw new NotFound("pizza  does not exist");
        }
        let price = await pizzaRepo.findPriceofPizza(pizzaId);
        price = price * amount;
        return await basketRepo.update(
            id,
            pizzaId,
            amount,
            price,
            userId,
            basket
        );
    }
    async delete(id, userId) {
        console.log(id, userId);
        const pizzaInBasket = await basketRepo.findUserAndPizza(id, userId);
        if (pizzaInBasket == null) {
            throw new NotFound("Pizza for this user not found");
        }

        return await basketRepo.deletePizza(id);
    }
    async price(userId, basket) {
        return await basketRepo.findPriceofPizza(userId, basket);
    }
}

module.exports = new Pizza();
