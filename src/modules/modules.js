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

  
  const users = sequelize.define("users", {
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
        type: Sequelize.STRING,
        allowNull: false
      },
  });



  const basket = sequelize.define("basket", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    address: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    delivery: {
        type: Sequelize.STRING,
        allowNull: false
      },
    status: {
        type: Sequelize.STRING,
        allowNull: false
      },
    promocode: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });

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





  const pizzas = sequelize.define("pizzas", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ingridients: {
        type: Sequelize.STRING,
        allowNull: false
      },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });

roles.hasMany(userRoles,{
  as:"GGGGGG",
  foreignKey:'userID',
  sourceKey:'id'
  })
