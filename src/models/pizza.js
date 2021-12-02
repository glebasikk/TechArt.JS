const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


    const pizzas = sequelize.define("pizzas", {
        id: {
            type: Sequelize.DataTypes.JSON,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.DataTypes.JSON,
            type: Sequelize.STRING,
            allowNull: false
        },
        ingridients: {
            type: Sequelize.DataTypes.JSON,
            type: Sequelize.STRING,
            allowNull: false
        },
        picture: {
            type: Sequelize.DataTypes.JSON,
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DataTypes.JSON,
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });

   


    module.exports = pizzas