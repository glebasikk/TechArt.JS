const { check } = require("express-validator");

module.exports = [
    check("promocode", "empty promocode").notEmpty(),
    check("discount", "empty discount").notEmpty(),
    check("discount", "notFloat discount or discount out of range").isFloat({
        min: 0,
        max: 1,
    }),
    check("expires", "empty expires").notEmpty(),
    check("expires", "incorrect format").isDate({ format: "YYYY-MM-DD" }),
];
