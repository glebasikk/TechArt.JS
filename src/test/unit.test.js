const supertest = require("supertest");
const app = require("../app");

describe("basket", () => {
    describe("tests", () => {
        let done = () => {
            return 1;
        };

        test("add in basket", async () => {
            const response = await supertest(app)
                .post("/addInBasket")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQzMTIwMDgzLCJleHAiOjE2NDMyMDY0ODN9.D2WDf7-MwNMp-YldiTBiG7myAup75ufZl1t9RD_oIq4 "
                )
                .send({
                    id: 2,
                    pizzaId: "2",
                    amount: 22,
                    basket: "3",
                    status: "admin@mail.ru",
                    promocode: 4,
                    price: 1,
                    ingridients: "safdsafdsfsdfdsfsdf",
                });
            expect(response.body).toEqual({
                message: "200",
                status: "Pizza sacsessful added",
            });
        });

        test("allBaskets", async () => {
            const response = await supertest(app)
                .get("/allBaskets")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQzMTIwMDgzLCJleHAiOjE2NDMyMDY0ODN9.D2WDf7-MwNMp-YldiTBiG7myAup75ufZl1t9RD_oIq4 "
                );
            console.log(response.body[0]);
            expect(response.body[0].id).toEqual(1);
        });

        test("find test", async () => {
            const response = await supertest(app)
                .post("/deletePizzaFromBasket")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQzMTIwMDgzLCJleHAiOjE2NDMyMDY0ODN9.D2WDf7-MwNMp-YldiTBiG7myAup75ufZl1t9RD_oIq4 "
                )
                .send({
                    id: 1,
                });
            expect(response.body).toEqual({
                message: "200",
                status: "Pizza successfully deleted from the basket",
            });
        });

        done();
    });
});

// const d = require("../a");
// const basket = require("../service/basket");
// const Basket = require("../controllers/basket");
// const { TestWatcher } = require("jest");

// test("userBaskets", async () => {
//     let done = () => {
//         return 1;
//     };
//     let y = await basket.userBaskets(8);
//     expect(y).not.toBeNull();
//     expect(y[0].id).not.toBeNull();
//     done();
// });

// test("add", async () => {
//     let done = () => {
//         return 1;
//     };
//     let y = await basket.add(18, 10, 1, 1);
//     expect(y).not.toBeNull();
//     done();
// });

// test("update", async () => {
//     let done = () => {
//         return 1;
//     };
//     let y = await basket.update(14, 17, 17, 8, 2);
//     expect(y).not.toBeNull();
//     done();
// });

// test("delete", async () => {
//     let done = () => {
//         return 1;
//     };
//     let y = await basket.delete(15, 1);
//     expect(y).not.toBeNull();
//     done();
// });
// //supertest
