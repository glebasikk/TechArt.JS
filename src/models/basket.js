const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


    const basket = sequelize.define("basket", {
        id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        orderID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        customerID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pizzaID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });

    module.exports = basket