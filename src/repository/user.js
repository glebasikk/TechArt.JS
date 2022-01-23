const user = require("../models/user");

class User {
    async allUsers() {
        return await user.findAll({
            where: { id: id, username: username, email: email },
        });
    }
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

module.exports = new User();
