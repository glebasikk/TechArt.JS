const {secret} = require ('../config')
const jwt = require('jsonwebtoken')


module.exports = function (req, res, next){
    if (req.method === "OPTIONS"){
        console.log(1)
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(400).json({message: 'user not authorized'})
        }
        const decodedData = jwt.verify(token, secret)
        req.body.userId = decodedData.id
        req.body.email = decodedData.email
        next()
    }catch(e){
        console.log(e)
        return res.status(400).json({message: 'user not authorized'})
    }
}