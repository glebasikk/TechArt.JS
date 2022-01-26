
const sequelize = require("../models/sequelize");
const picture = require("../models/picture");
const pizzas = require("../models/pizza");

const notFound = require("../errors/NotFound");
const fs = require("fs");

class Transaction {
    async transaction(id) {
        const t = await sequelize.transaction();
        try {
            
            let pizza = await pizzas.findOne({ where: { id: id } });
            if (pizza == null) {
                throw new notFound("pizza does not exist");
            }

            let picturePath = await picture.findOne({
                where: { id: pizza.picture },
            });
            if (picturePath == null) {
                throw new notFound("picture does not exist");
            }
            console.log(picturePath.picture);
            fs.unlink(picturePath.picture, function (err) {
                if (err) {
                    throw new Error("some problem");
                } else {
                    console.log("Файл удалён");
                }
            });

            await pizzas.destroy({ where: { id: id }, transaction: t  });
            await picture.destroy(
                { where: { id: pizza.picture },transaction: t },
            );
            t.commit()
        } catch {
            t.rollback()
        }
    }
}
module.exports = new Transaction();
