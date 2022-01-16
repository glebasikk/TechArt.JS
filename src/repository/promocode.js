const sequelize = require("sequelize");
const promocodes    = require("../models/promocode");

class promo {
    async  addPromocode( promocode, discount){
        return await  promocodes.create(
          {
            //id:id,
            promocode: promocode,
            discount: discount      
          })
    }
    async discount(id){
     return await promocodes.max('discount',{where: {"id": id} ,attributes:['discount']})
     
    }

}
module.exports = new promo()





//id,address,delivery,status,promocode,price,discount