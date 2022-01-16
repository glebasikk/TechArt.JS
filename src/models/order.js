const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


    const order = sequelize.define("orders", {
        id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        basket: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        adress: {
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
            allowNull: true
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

    module.exports = order