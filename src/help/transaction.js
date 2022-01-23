const sequelize = require("sequelize");

class Transaction {
    async transaction() {
        let t = await sequelize.Transaction();
    }
}

module.exports = new Transaction();
