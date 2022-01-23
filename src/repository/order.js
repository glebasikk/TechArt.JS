const orders = require("../models/order");

class Order {
    async createOrder(
        user,
        basket,
        adress,
        delivery,
        status,
        promocode,
        price,
        discount,
        date
    ) {
        return await orders.create({
            adress: adress,
            user: user,
            basket: basket,
            delivery: delivery,
            status: status,
            promocode: promocode,
            price: price,
            discount: discount,
            date: date,
        });
    }

    async userAndId(id, user) {
        return await orders.findOne({ where: { user: user, id: id } });
    }

    async basket(id) {
        return await orders.sum("basket", {
            where: { id: id },
            attributes: ["basket"],
        });
    }

    async newPromocode(id, promocode, price, discount) {
        return await orders.update(
            { promocode: promocode, price: price, discount: discount },
            { where: { id: id } }
        );
    }
    async ordersList() {
        return await orders.findAll({ attributes: ["id", "status"] });
    }
    async userAndOrder(user) {
        return await orders.findAll({
            where: { user: user },
            attributes: ["user", "id"],
        });
    }
    CountOrdersForUser(user) {
        let count = orders.count({ where: { user: user } });
        return count;
    }
}

module.exports = new Order();
