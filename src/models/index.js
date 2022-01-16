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

userRoles.hasMany(orders,{
    foreignKey:'user',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
orders.belongsTo(promocodes)


userRoles.hasMany(basket,{
    foreignKey:'user',
    sourceKey:'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
basket.belongsTo(userRoles)


pizzas.hasMany(basket,{
    foreignKey:'pizza_id',
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





