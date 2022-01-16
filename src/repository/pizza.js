const sequelize = require("sequelize");
const pizzas    = require("../models/pizza");


class pizza{
    async allpizzas(){
       // pizzas.findAll().then(user=>{return (user)})
      return await pizzas.findAll({attributes: ['name']})
                                    
    }

    async createPizzas(name,picture,price,ingridients){
       return await pizzas.create({
            name: name,
            ingridients: ingridients,
            picture: picture,
            price: price
        })
     
    }

    async removePizzaById(id){
        return await pizzas.destroy({where: {"id": id}})
      }

    async  updatePizzaIngridients(id, ingridients){
        return await  pizzas.update(
          {
            ingridients: ingridients
          },
          {where:{id: id}})
    }

    async findpizzaByID(id){
        return await pizzas.findAll({where: {id:id},})
    }
    async findPriceofPizza(id){
       let a = await pizzas.findAll({where: {id:id}, attributes: ['price'], raw: true})
        let y = JSON.stringify(a)
        let z = y.slice(10)
        z = z.substring(0, z.length - 2)
        let num = Number(z) 
        return num
      }
    
}

module.exports = new pizza()



