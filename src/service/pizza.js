
const pizzas = require("../repository/pizza");

class pizza {
    async createPizza (name,picture,price,ingridients ){
        return await pizzas.createPizzas(name,picture,price,ingridients)
    }
    async deletePizza(id){
        return await pizzas.removePizzaById(id)
    }
    async allPizzas (){
        return await  pizzas.allpizzas()
    }
    async updatePizzaIngridients(id, ingridients){
        return await pizzas.updatePizzaIngridients(id, ingridients)
    }
    async findByPK (id){
        return await pizzas.findpizzaByID(id)
    }
}

//pizza.pizza("sad","sadsa", 111111, "1111")

module.exports = new pizza()