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
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
userRoles.belongsTo(roles)


users.hasMany(userRoles,{
    foreignKey:'role',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
userRoles.belongsTo(users)


promocodes.hasMany(orders,{
    foreignKey:'promocode',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
orders.belongsTo(promocodes)


orders.hasMany(basket,{
    foreignKey:'orderID',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
basket.belongsTo(orders)


userRoles.hasMany(basket,{
    foreignKey:'customerID',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
basket.belongsTo(userRoles)


pizzas.hasMany(basket,{
    foreignKey:'pizzaID',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
basket.belongsTo(pizzas)


users.hasMany(userInfo,{
    foreignKey:'user',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
userInfo.belongsTo(users)





