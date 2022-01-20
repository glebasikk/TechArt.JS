const pizzas = require("../repository/pizza");
const pictures = require("../repository/picture");
const NotFound = require("../errors/NotFound");

class pizza {
    async createPizza(name, picture, price, ingridients) {
        if ((await pictures.findPictureByID(picture)) == null) {
            throw new NotFound("picture  does not exist");
        }
        return await pizzas.createPizzas(name, picture, price, ingridients);
    }
    async findByPK(id) {
        const func = await pizzas.findpizzaByID(id);
        if (func == null) {
            throw new NotFound("pizza  does not exist");
        }
        return func;
    }
    async deletePizza(id) {
        const func = await pizzas.findpizzaByID(id);
        if (func == null) {
            throw new NotFound("pizza  does not exist");
        }
        return await pizzas.removePizzaById(id);
    }
    async allPizzas() {
        return await pizzas.allpizzas();
    }
    async updatePizzaIngridients(id, ingridients) {
        let func = await pizzas.findpizzaByID(id);
        if (func == null) {
            throw new NotFound("pizza  does not exist");
        }
        return await pizzas.updatePizzaIngridients(id, ingridients);
    }
}

module.exports = new pizza();
