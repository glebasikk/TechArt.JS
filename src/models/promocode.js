const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

    const promocodes = sequelize.define("promocodes", {
        id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        promocode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        discount: {
            type: Sequelize.FLOAT,
            allowNull: false
            },
    });

    module.exports = promocodes