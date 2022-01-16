const Sequelize = require("sequelize");
//new Sequelize("pizza", "root", "root",
const sequelize = new Sequelize("pizza", "root", "root", {
        dialect: "mysql",
        host: "localhost",
        port: "3306",
        define:{
            timestamps: false
    }
});


// try {
//     sequelize.authenticate()
//      console.log('Соединение с БД было успешно установлено')
//    } catch (e) {
//      console.log('Невозможно выполнить подключение к БД: ', e)
//    }


module.exports = sequelize