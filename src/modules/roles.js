const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

    const roles = sequelize.define("roles", {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
        },
        name: {
        type: Sequelize.INTEGER,
        allowNull: false
        },
    });

  
    module.exports = roles