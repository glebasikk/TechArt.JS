const express = require("express");
const router = express.Router();
const picture = require("../controllers/picture");
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");

router.post("/upload", authMidleware, roleMidleware("admin"), picture.upload);

module.exports = router;
