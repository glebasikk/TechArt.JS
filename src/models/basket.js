const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const basket = sequelize.define(
    "basket",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        pizza_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        basket: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = basket;
