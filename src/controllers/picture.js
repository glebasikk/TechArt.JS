const pictureService = require("../service/picture");
const Response = require("../help/Response");

class Picture {
    async upload(req, res, next) {
        try {
            await pictureService.upload(req.file);
            return res.send(new Response("200", "picture added"));
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Picture();
