const picture = require("../models/picture");
const sequelize = require("sequelize");

class Picture {
    async addPicture(path) {
        return await picture.create({ picture: path });
    }
    async findPictureByID(id) {
        return await picture.findOne({ where: { id: id } });
    }
}

module.exports = new Picture();
