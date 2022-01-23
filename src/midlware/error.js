const Response = require("../help/Response");

module.exports = (error, req, res, next) => {
    res.status(error.status || 500).json(
        new Response(error.message, error.status || 500)
    );
};
