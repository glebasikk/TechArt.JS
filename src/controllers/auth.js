const authService = require('../service/auth')
const validator = require('express-validator')

class authcontroller {
    async registration(req,res){
        try{
            const err = validator.validationResult(req)
            if (!err.isEmpty()){
                return res.json(err)
            }
            let response = await authService.registration(req.body.email,req.body.password,req.body.username)
            return  res.json(response)
        }catch(e){
            console.log(e)
            return  res.status(400).json({message: 'registration error'})
        }
    }
    async login(req,res){
        try{
            const err = validator.validationResult(req)
            if (!err.isEmpty()){
                return res.json(err)
            }
            let response = await authService.login(req.body.email,req.body.password)
            return  res.json(response)
        }catch(e){
            console.log(e)
            return  res.status(400).json({message: 'login error'})
        }
    }
    async logout(req,res){
        try{
            let response = await authService.logout()
            return res.json(response)
        }catch(e){
            console.log(e)
            return  res.status(400).json({message: 'logout error'})
        }
    }
    async deleteAccount(req,res){
        try{
            let response = await authService.deleteAccount(req.body.userId)
            return res.json(response)
        }catch(e){
            console.log(e)
            return  res.status(400).json({message: 'logout error'})
        }
    }
}

module.exports = new authcontroller()