const Sequelize = require("sequelize");
const sequelize = require("./sequelize");


  const userInfo = sequelize.define("userInfo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });


  module.exports = userInfo


  