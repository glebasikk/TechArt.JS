const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const order = sequelize.define("orders", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    adress: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    delivery: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    promocode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = order;
