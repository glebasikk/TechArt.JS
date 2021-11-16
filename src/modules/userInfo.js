const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const userInfo = sequelize.define("userInfo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });


module.exports = userInfo


  