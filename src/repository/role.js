const sequelize = require("sequelize");
const roleModel = require("../models/roles");

class roles {
    async findRole(role) {
        let model = await roleModel.findOne({ where: { role: role } });
        return model.role;
    }
}

module.exports = new roles();
