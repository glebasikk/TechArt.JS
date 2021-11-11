const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


    const pizzas = sequelize.define("pizzas", {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
        },
        name: {
        type: Sequelize.STRING,
        allowNull: false
        },
        ingridients: {
            type: Sequelize.STRING,
            allowNull: false
        },
        picture: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });

   


    module.exports = pizzas