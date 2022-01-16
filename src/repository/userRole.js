const sequelize = require("sequelize");
const userRole     = require("../models/userRole");



class userRoleRepository{
    async  userAndOrder(){
      let elem = await userRole.findAll({attributes: ['id']})
          let elem1 = JSON.stringify(elem)
          let mas = [] 
          let mas1 = []
          mas = JSON.parse(elem1)
          let f = mas.map((element) => {
              mas1.push (element.id)
          })
          return mas1
    }
}


module.exports = new userRoleRepository()