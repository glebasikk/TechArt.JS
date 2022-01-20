const orderRepo = require("../repository/order");
const basketRepo = require("../repository/basket");
const promocdeRepo = require("../repository/promocode");
const userRepo = require("../repository/user");
const NotFound = require("../errors/NotFound");
const NotAcceptable = require("../errors/NotAcceptable");

class orderService {
    async createOrder(user, basket, adress, delivery, status, promocode) {
        if (promocode === undefined) {
            promocode = 1;
        }
        const promo = await promocdeRepo.findPromocode(promocode);
        if ((await basketRepo.userAndBasket(user, basket)) == null) {
            throw new NotFound("basket does not exist for this user");
        }
        if (promo == null) {
            throw new NotFound("promocode  does not exist");
        }

        let today = new Date();
        let todayParse = Date.parse(today);
        console.log(promo.expires);
        if (Date.parse(promo.expires) < todayParse) {
            throw new NotAcceptable("promo code has expired");
        }
        let price = await basketRepo.findPriceofPizza(user, basket);
        let discount = price * (await promocdeRepo.discount(promocode));
        let totalPrice = price - discount;
        return await orderRepo.createOrder(
            user,
            basket,
            adress,
            delivery,
            status,
            promocode,
            totalPrice,
            discount,
            today
        );
    }

    async addPromocode(id, user, promocode) {
        const order = await orderRepo.userAndId(id, user);
        if (order == null) {
            throw new NotFound("order does not exist for this user");
        }
        const promo = await promocdeRepo.findPromocode(promocode);
        if (promo == null) {
            throw new NotFound("promocode  does not exist");
        }
        if (order.promocode != "no promo code") {
            throw new NotAcceptable("promo code already activated");
        }
        let price = await basketRepo.findPriceofPizza(user, order.basket);
        let discount = price * (await promocdeRepo.discount(promocode));
        let totalPrice = price - discount;
        return await orderRepo.newPromocode(
            id,
            promocode,
            totalPrice,
            discount
        );
    }
    async orderList() {
        return await orderRepo.ordersList();
    }
    async userAndOrder() {
        let mas = [];
        let masUser = await userRepo.userAndOrder();
        for (const user of masUser) {
            let count = await orderRepo.CountOrdersForUser(user);
            if (count > 0) {
                let res = await orderRepo.userAndOrder(user);
                mas.push(res);
            } else {
                let res = {
                    user: user,
                    id: "no orders",
                };
                let ress = [res];
                mas.push(ress);
            }
        }
        return mas;
        // return orderRepo.userAndOrder(id);
        // return await orderRepo.CountOrdersForUser(id);
    }
}

module.exports = new orderService();
