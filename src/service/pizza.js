const sequelize = require("sequelize");
const pizzas = require("../repository/pizzas");

class pizza {
    static createpizza (name,picture,price,ingridients ){
        return pizzas.createPizzas(name,picture,price,ingridients)
    }
    static deletepizza(id){
        return pizzas.removePizzaById(id)
    }
    static allpizzas (){
        return  pizzas.allpizzas()
    }
}

//pizza.pizza("sad","sadsa", 111111, "1111")

module.exports = pizza