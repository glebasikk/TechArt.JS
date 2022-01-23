const pizzaRepo = require("../repository/pizza");
const pictureRepo = require("../repository/picture");
const NotFound = require("../errors/NotFound");

class Pizza {
    async createPizza(name, picture, price, ingridients) {
        if ((await pictureRepo.findPictureByID(picture)) == null) {
            throw new NotFound("picture  does not exist");
        }
        return await pizzaRepo.createPizzas(name, picture, price, ingridients);
    }
    async findByPK(id) {
        const func = await pizzaRepo.findpizzaByID(id);
        if (func == null) {
            throw new NotFound("pizza  does not exist");
        }
        return func;
    }
    async deletePizza(id) {
        return await pizzaRepo.removePizzaById(id);
    }
    async allPizzas(page) {
        if (page == undefined || page < 1) {
            page = 1;
        }
        let limit = 10;
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let result = await pizzaRepo.allpizzas();
        result = result.slice(startIndex, endIndex);
        if (result[0] == null) {
            throw new NotFound("Page does not exist");
        }
        return await result;
    }
    async updatePizzaIngridients(id, ingridients) {
        let func = await pizzaRepo.findpizzaByID(id);
        if (func == null) {
            throw new NotFound("pizza  does not exist");
        }
        return await pizzaRepo.updatePizzaIngridients(id, ingridients);
    }
}

module.exports = new Pizza();
