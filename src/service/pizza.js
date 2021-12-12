const sequelize = require("sequelize");
const pizzas = require("../repository/pizza");

class pizza {
    static createpizza (name,picture,price,ingridients ){
        return pizzas.createPizzas(name,picture,price,ingridients)
    }
    static deletepizza(id){
        return pizzas.removePizzaById(id)
    }
    async allpizzas (){
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