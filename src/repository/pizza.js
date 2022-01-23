const pizzas = require("../models/pizza");

class Pizza {
    async allpizzas() {
        // pizzas.findAll().then(user=>{return (user)})
        return await pizzas.findAll({ attributes: ["name"] });
    }

    async createPizzas(name, picture, price, ingridients) {
        return await pizzas.create({
            name: name,
            ingridients: ingridients,
            picture: picture,
            price: price,
        });
    }
    async removePizzaById(id) {
        return await pizzas.destroy({ where: { id: id } }); // 'id'
    }

    async updatePizzaIngridients(id, ingridients) {
        return await pizzas.update(
            {
                ingridients: ingridients,
            },
            { where: { id: id } }
        );
    }

    async findpizzaByID(id) {
        return await pizzas.findOne({ where: { id: id } });
    }
    async findPriceofPizza(id) {
        let a = await pizzas.findOne({ where: { id: id } });
        return a.price;
    }
}

module.exports = new Pizza();
