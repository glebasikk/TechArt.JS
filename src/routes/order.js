const express = require("express");
const order = require("../controllers/order");
const router = express.Router();
const authMidleware = require("../midlware/auth");
const roleMidleware = require("../midlware/role");
const orderValidator = require("../midlware/orderValidator");

router.post(
    "/addPromocode",
    authMidleware,
    orderValidator.addPromocode,
    order.addPromocode
);
router.post(
    "/createOrder",
    authMidleware,
    orderValidator.addOrder,
    order.addOrder
);
router.get("/orderList?:page", authMidleware, order.orderList);
router.get(
    "/userAndOrder",
    authMidleware,
    roleMidleware("admin"),
    order.userAndOrder
);
router.get(
    "/bestUsers",
    authMidleware,
    roleMidleware("admin"),
    order.bestUsers
);

module.exports = router;
