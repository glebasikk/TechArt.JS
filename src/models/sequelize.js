const Sequelize = require("sequelize");
//new Sequelize("pizza", "root", "root",
const sequelize = new Sequelize("pizza", "root", "12345", {
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    define: {
        timestamps: false,
    },
});

module.exports = sequelize;
