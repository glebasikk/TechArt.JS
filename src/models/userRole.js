const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

   
   const userRoles = sequelize.define("userRoles", {
       id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
       },
       userID: {
          type: Sequelize.INTEGER,
          allowNull: false
       },
       roles: {
          type: Sequelize.INTEGER,
          allowNull: false
       }
     });
   
   
module.exports = userRoles