const sequelize = require("sequelize");
const user = require("../models/user");
const role = require("../models/roles");

class users {
    async findUserByEmail(email) {
        return await user.findOne({ where: { email: email } });
    }
    async isUser(id) {
        return await user.count({ where: { id: id } });
    }
    async addUser(username, email, hashPassword, userRole) {
        return await user.create({
            email: email,
            password: hashPassword,
            username: username,
            role: userRole,
        });
    }
    async delUser(id) {
        return await user.destroy({ where: { id: id } });
    }
    async userAndOrder() {
        let elem = await user.findAll({ attributes: ["id"] });
        let elem1 = JSON.stringify(elem);
        let mas = [];
        let mas1 = [];
        mas = JSON.parse(elem1);
        let f = mas.map((element) => {
            mas1.push(element.id);
        });
        return mas1;
    }
}

module.exports = new users();
