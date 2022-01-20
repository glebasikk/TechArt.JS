class NotAcceptable extends Error {
    constructor(message) {
        super(message);
        this.name = "NotAcceptable";
        this.status = 406;
    }
}

module.exports = NotAcceptable;
