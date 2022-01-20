const picture = require("../repository/picture");
const NotFound = require("../errors/NotFound");

class Picture {
    async upload(file) {
        if (!file) {
            throw new NotFound("file does not exist ");
        }
        return await picture.addPicture(file.path);
    }
}

module.exports = new Picture();
