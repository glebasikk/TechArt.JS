const sequelize = require("sequelize");
const users = require("../repository/user");

class userServices {
    static allUsers(){
        return users.allUsers()
    }
    // static allUsers(){
    //     users.findAll().then(user=>{console.log(user)})
    //   }
    static createUser(id, user){
        return users.createUser(id, user)
    }
    static findUserByEmail(email){
        return users.findUserByID(email)
    }
    static removeUserById(id){
        return users.removeUserById(id)
      }
}




userServices.findUserByEmail("santismasya@gami.com")
// userServices.allUsers()
module.exports = userServices