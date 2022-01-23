const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const authMidleware = require("../midlware/auth");
const registrationValidtor = require("../midlware/regitrationValidator");
const loginValidtor = require("../midlware/loginValidator");
const roleMidleware = require("../midlware/role");

router.post("/registration", registrationValidtor, auth.registration);
router.post("/login", loginValidtor, auth.login);
router.get("/logout", authMidleware, auth.logout);
router.get("/deleteAccount", authMidleware, auth.deleteAccount);
router.get(
    "/allUsers?:page",
    authMidleware,
    roleMidleware("admin"),
    auth.allUsers
);

module.exports = router;
