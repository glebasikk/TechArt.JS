const Sequelize = require("sequelize");
const orders = require("./orders");
const promocodes = require("./promocodes");
const pizzas = require("./pizzas");
const users = require("./users");
const basket = require("./basket");
const picture = require("./picture");

promocodes.hasMany(orders, {
    foreignKey: "promocode",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
orders.belongsTo(promocodes);

users.hasMany(orders, {
    foreignKey: "user",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
orders.belongsTo(users);

users.hasMany(basket, {
    foreignKey: "user",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
basket.belongsTo(users);

pizzas.hasMany(basket, {
    foreignKey: "pizza_id",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
basket.belongsTo(pizzas);

picture.hasMany(pizzas, {
    foreignKey: "picture",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
pizzas.belongsTo(picture);

// roles.hasMany(userRoles,{
//     foreignKey:'role',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// userRoles.belongsTo(roles)

// users.hasMany(userRoles,{
//     foreignKey:'role',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// userRoles.belongsTo(users)

// promocodes.hasMany(orders,{
//     foreignKey:'promocode',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// orders.belongsTo(promocodes)

// userRoles.hasMany(orders,{
//     foreignKey:'user',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// orders.belongsTo(promocodes)

// userRoles.hasMany(basket,{
//     foreignKey:'user',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// basket.belongsTo(userRoles)

// pizzas.hasMany(basket,{
//     foreignKey:'pizza_id',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// basket.belongsTo(pizzas)

// users.hasMany(userInfo,{
//     foreignKey:'user',
//     sourceKey:'id',
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// })
// userInfo.belongsTo(users)
