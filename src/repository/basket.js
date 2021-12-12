const sequelize = require("sequelize");
const baskets    = require("../models/basket");

class basket {
    async  addPromocode(id, promocde){
        return await  basket.update(
          {
            promocde: promocde
          },
          {where:{id: id}})
    }
}

module.exports = new basket()





//id,address,delivery,status,promocode,price,discount