const sequelize = require("sequelize");
const pizzaBasket     = require("../models/basket");
const pizza = require("./pizza");


class pizzaBaskets{
    async allpizzas(){
       // pizzas.findAll().then(user=>{return (user)})
      return await pizzaBasket.findAll()
                                    
    }

    async addPizza(pizzaID,price,amount,user,basket){
       return  await pizzaBasket.create({
            pizza_id: pizzaID,
            price: price,
            amount: amount,
            user: user,
            basket: basket

        })
     
    }

    
    async  update(id,pizzaID, amount, price, user, basket){
      return await  pizzaBasket.update(
        {
          pizza_id: pizzaID,
          amount: amount,
          price: price,
          user: user,
          basket: basket
        },
        {where:{id: id}})
  }

    async deletePizza(id){
     let x = await pizzaBasket.destroy({where: {"id": id}})
    return await x
  }

  async findPriceofPizza(user, basket){
    return await pizzaBasket.sum('price' , {where: {user:user , basket:basket}, attributes:['price']})
    
  }
}

module.exports = new pizzaBaskets()

