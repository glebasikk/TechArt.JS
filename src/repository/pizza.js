const sequelize = require("sequelize");
const pizzas    = require("../models/pizza");


class pizza{
    async allpizzas(){
       // pizzas.findAll().then(user=>{return (user)})
      return await pizzas.findAll({attributes: ['name']})
                                    
    }

    static createPizzas(name,picture,price,ingridients){
       return  pizzas.create({
            name: name,
            ingridients: ingridients,
            picture: picture,
            price: price
        })
     
    }

    static removePizzaById(id){
        pizzas.destroy({where: {"id": id}})
      }

    async  updatePizzaIngridients(id, ingridients){
        return await  pizzas.update(
          {
            ingridients: ingridients
          },
          {where:{id: id}})
    }
    async findpizzaByID(id){
        return await pizzas.findAll({where: {id:id}})
      }
    
}

    
// console.log(pizza.allpizzas())
// pizza.createPizzas("vsafdsaax","xsa",11221,"saaabest")
//
module.exports = new pizza()
