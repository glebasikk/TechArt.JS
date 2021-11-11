const Sequelize = require("sequelize");
const sequelize = new Sequelize("pizza", "root", "we7101664", {
    dialect: "mysql",
    host: "localhost",
    port: "3306"
});


try {
    sequelize.authenticate()
     console.log('Соединение с БД было успешно установлено')
   } catch (e) {
     console.log('Невозможно выполнить подключение к БД: ', e)
   }


module.exports = sequelize