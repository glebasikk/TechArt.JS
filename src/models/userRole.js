const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

   
   const userRoles = sequelize.define("user_Roles", {
       id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
       },
       user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
       },
       role_id: {
          type: Sequelize.INTEGER,
          allowNull: false
       }
     });
   
   
module.exports = userRoles