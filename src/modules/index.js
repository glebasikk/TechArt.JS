const Sequelize = require("sequelize");
const orders = require("./orders");
const promocodes = require("./promocodes");
const pizzas = require("./pizzas");
const roles = require("./roles");
const userInfo = require("./userInfo");
const userRoles = require("./userRoles");
const users = require("./users");
const basket = require("./basket")

roles.hasMany(userRoles,{
    foreignKey:'role',
    sourceKey:'id'
    })


users.hasMany(userRoles,{
    foreignKey:'role',
    sourceKey:'id'
    })

promocodes.hasMany(orders,{
    foreignKey:'promocode',
    sourceKey:'id'
    })

orders.hasMany(basket,{
    foreignKey:'orderID',
    sourceKey:'id'
    })

userRoles.hasMany(basket,{
    foreignKey:'customerID',
    sourceKey:'id'
    })

pizzas.hasMany(basket,{
    foreignKey:'pizzaID',
    sourceKey:'id'
    })

users.hasMany(userInfo,{
    foreignKey:'user',
    sourceKey:'id'
    })





