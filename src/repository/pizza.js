const sequelize = require("sequelize");
<<<<<<< HEAD
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
=======
const pizzas = require("../models/pizza");

class pizza {
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

module.exports = new pizza();
>>>>>>> dev
