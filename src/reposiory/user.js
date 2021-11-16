const sequelize = require("sequelize");
const users     = require("../modules/users");
const userInfo  = require("../modules/userInfo.js");


class UserRep{
  static allUsers(){
    users.findAll().then(user=>{console.log(user)})
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
    users.findAll({where:{email: email }})
  }
  
  static removeUserById(id){
    users.destroy({where: {id: id}})
  }

  static removeUserByEmail(email){
    users.destroy({where: {email: email}})
  } 
  static addUserInfo(){
    userInfo.create({
      nickname: "ava",
      user: 1
    })
  }
  static allUserss(){
    userInfo.findAll().then(userss=>{console.log(userss)})
  }
}

module.exports = UserRep

//console.log( UserRep.allUsers())
//  UserRep.allUsers()
// UserRep.findUserByID(1)
//UserRep.findUserByEmail("kuznetsovaWeeWee@gmail.com")
// UserRep.removeUserById(3)
// UserRep.changeUserPassword(9,9)
//UserRep.create("aragon@gami.com","voin")
// UserRep.allUsers()  
UserRep.allUserss()