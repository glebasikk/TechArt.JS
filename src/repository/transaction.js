const Sequelize = require("sequelize");
const sequelize = require("../models/sequelize");
const picture = require("../models/picture");
const pizzas = require("../models/pizza");

const notFound = require("../errors/NotFound");
const fs = require("fs");

class trans {
    async trans(id) {
        try {
            //const t = await sequelize.transaction();
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

            await pizzas.destroy({ where: { id: id } }, { transaction: t });
            await picture.destroy(
                { where: { id: pizza.picture } },
                { transaction: t }
            );
        } catch {}
    }
    // async removePizzaById(id) {
    //     Sequelize.Transaction ()
    //     return await pizzas.destroy({ where: { id: id } }); // 'id'
    // }

    // async findPictureByID(id) {
    //     return await picture.findOne({ where: { id: id } });
    // }
    // async deletePicture(id) {
    //     return await picture.destroy(
    //         { where: { id: id } },
    //         { transaction: transaction.transaction() }
    //     );
    // }
}
module.exports = new trans();
