const d = require("../a");
const basket = require("../service/basket");
const Basket = require("../controllers/basket");
const { TestWatcher } = require("jest");

test("userBaskets", async () => {
    let done = () => {
        return 1;
    };
    let y = await basket.userBaskets(8);
    expect(y).not.toBeNull();
    expect(y[0].id).not.toBeNull();
    done();
});

test("add", async () => {
    let done = () => {
        return 1;
    };
    let y = await basket.add(18, 10, 1, 1);
    expect(y).not.toBeNull();
    done();
});

test("update", async () => {
    let done = () => {
        return 1;
    };
    let y = await basket.update(14, 17, 17, 8, 2);
    expect(y).not.toBeNull();
    done();
});

test("delete", async () => {
    let done = () => {
        return 1;
    };
    let y = await basket.delete(15, 1);
    expect(y).not.toBeNull();
    done();
});
