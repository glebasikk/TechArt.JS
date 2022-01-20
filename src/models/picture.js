const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const picture = sequelize.define("pictures", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = picture;
