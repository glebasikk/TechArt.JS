const pictureService = require("../service/picture");

class Picture {
    async upload(req, res) {
        try {
            await pictureService.upload(req.file);
            return res.send("succsess");
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Picture();
