const { check } = require("express-validator");

module.exports = [
    check("email", "incorrect email").isEmail(),
    check("email", "empty email").notEmpty(),
    check("email", "email length should be > 5 but < 30").isLength({
        max: 30,
        min: 5,
    }),
    check("password", "password length should be > 4").isLength({ min: 4 }),
    check("username", "empty username").notEmpty(),
];
