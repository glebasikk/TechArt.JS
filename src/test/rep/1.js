const users = require("./users");


// class Person{
//     find(email){
//         return users.findOne(where: {email: email})
//     }
// }
// const tom = new Person();
// console.log(tom.find);  // Tom


let x = new users()
x.id = 1
x.email = "aaa"
x.password = "ssss"


class UserRepository {

    create(id, email, password) {
  
      users.create({
       
        password = "ssss"
      })
  
    }
}
let z = new UserRepository


console.log(z.findUserByEmail(1))