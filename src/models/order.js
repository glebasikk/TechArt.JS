const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


    const orders = sequelize.define("orders", {
        id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        address: {
        type: Sequelize.INTEGER,
            allowNull: false
        },
        delivery: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        promocode: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        discount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });

    module.exports = orders