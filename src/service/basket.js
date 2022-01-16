const sequelize = require("sequelize");
const basketService = require("../repository/basket");
const pizzas = require("../repository/pizza");

class pizzaBaskets {
    async all (){
        return await  basketService.allpizzas()
    }
    async add (id,amount,user,basket ){
        
        let price = await pizzas.findPriceofPizza(id)
        price = price * amount
        return await basketService.addPizza(id,price,amount,user,basket)
    }
    async update(id,pizzaID, amount, user, basket){
        let price = await pizzas.findPriceofPizza(pizzaID)
        price = price * amount
        return await basketService.update(id,pizzaID, amount, price, user,basket)
    }
    async delete(id){
        return await basketService.deletePizza(id)
    }
    async price(user, basket){
        return await basketService.findPriceofPizza(user, basket)
    }
}

module.exports = new pizzaBaskets()
