const orderRepo = require("../repository/order");
const basketRepo = require("../repository/basket");
const promocdeRepo = require("../repository/promocode");
const userRoleRepo = require("../repository/userRole");


class orderService {

    async createOrder(user,basket,adress,delivery,status,promocode){
        if (promocode === undefined){
            promocode = 1
        }
        let price = await basketRepo.findPriceofPizza(user, basket)    
        let discount = await promocdeRepo.discount(promocode)
        let totalPrice = price * discount 
        discount = price - totalPrice
        return await orderRepo.createOrder(user,basket,adress,delivery,status,promocode,totalPrice,discount)
    }

    async newPromocode(id, promocode){
        let user = await orderRepo.user(id)
        let basket = await orderRepo.basket(id)
        let price = await basketRepo.findPriceofPizza(user, basket)    
        let discount = await promocdeRepo.discount(promocode)
        let totalPrice = price * discount 
        discount = price - totalPrice
        return await orderRepo.newPromocode(id, promocode, price, discount)
    }
    async orderList(){
        return await orderRepo.ordersList()
    }
    async userAndOrder(){
        let mas = []
        let masUser = await userRoleRepo.userAndOrder()
        for(const user of masUser) {
            let count = await orderRepo.CountOrdersForUser(user)
            if (count>0){
               let res =  await orderRepo.userAndOrder(user)
               mas.push(res)
            }
            else {
                let res = {
                    "user": user,
                    "id": "no orders"
                };
                let ress = [res]
                mas.push(ress)
            }
            
        }
        return(mas)
        //return orderRepo.userAndOrder(id)
        //return await orderRepo.CountOrdersForUser(id)
    }
}

module.exports = new orderService()