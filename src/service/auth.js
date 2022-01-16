const userMongo = require('../mongose/user')
const roleMongo = require('../mongose/role')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {secret} = require ('../config')
const Response = require("../help/Response")

const generateToken =(id,email, role) =>{
    const payload = {
        id,
        email,
        role
    }
    return jwt.sign(payload, secret,{expiresIn:"24h"})
}


class authservice {
    async registration(email,password,username){
            const candidate = await userMongo.findOne({email})
            if(candidate){
                return new Response("400", "User exist")
            }
            const hashPassword = bcrypt.hashSync(password, 5)
            const userRole = await roleMongo.findOne({role: 'user'})
            const adduser = new userMongo ({username,email,password: hashPassword, roles: [userRole.role]})
            await adduser.save()
            return new Response("200", "User sacsessful added")
    }
    async login(email, password){
            const user = await userMongo.findOne({email})
            if(!user){
                return new Response("400", "User does not exist")
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword){
                return new Response("400", "Incorrect password")
            }
            const token = generateToken(user.id,user.email, user.roles)
            return {token}
    }
    async logout(){
            const token = {"token": 0}
            return token
    }
    async deleteAccount(id){
            await userMongo.deleteOne({id})
            const token = {"token": 0}
            return token
    }
    async getUsers(req,res){
        try{    
          
           // console.log(req.body)
          return  res.json("Its Work")
        }catch(e){
            
        }
    }
}

module.exports = new authservice()