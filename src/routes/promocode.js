const express = require("express");
const promocode = require("../controllers/promocode");
const router = express.Router();
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");
const promocodeValidator = require("../midlware/promocdeValidator");

router.post(
    "/Promocode",
    authMidleware,
    promocodeValidator,
    roleMidleware("admin"),
    promocode.addPromocode
);

module.exports = router;
