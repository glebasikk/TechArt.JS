const {secret} = require ('../config')
const jwt = require('jsonwebtoken')


module.exports = function (roles){
        return function(req, res, next){
        if (req.method === "OPTIONS"){
            console.log(1)
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(400).json({message: 'user not authorized'})
            }
            const {role: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            userRoles.forEach(role => {
                if(roles === role){
                    hasRole =true
                }
                next()
            });
            if (hasRole){
                return res.status(400).json({message: 'access denied'})
            }
            next()
        }catch(e){
            console.log(e)
            return res.status(400).json({message: 'user not authorized'})
        }
    }
}
