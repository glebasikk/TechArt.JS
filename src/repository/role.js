const roleModel = require("../models/roles");

class Roles {
    async findRole(role) {
        let model = await roleModel.findOne({ where: { role: role } });
        return model.role;
    }
}

module.exports = new Roles();
