const sequelize = require("sequelize");
const users     = require("../modules/users");
const userInfo  = require("../modules/userInfo.js");


class UserRepository{
  static  allUsers(){
    return  users.findAll().then(user=>{console.log(user)})
  }

  static createUser(email,pass){
    users.create({
      email: email,
      password: pass
    })
  }

  static findUserByID(id){
    users.findByPk(id)
  }

  static findUserByEmail(email){
   return users.findAll({where:{email: email }}).then(user=>{console.log(user)})
  }
  
  static removeUserById(id){
    users.destroy({where: {id: id}})
  }

  static removeUserByEmail(email){
    users.destroy({where: {email: email}})
  } 
  
}


module.exports = UserRepository

//console.log( UserRep.allUsers())
//  UserRep.allUsers()
UserRepository.findUserByEmail("santismasya@gami.com")
//UserRep.findUserByEmail("kuznetsovaWeeWee@gmail.com")
// UserRep.removeUserById(3)
// UserRep.changeUserPassword(9,9)
//UserRep.create("aragon@gami.com","voin")
// UserRep.allUsers()  
//UserRepository.allUsers()