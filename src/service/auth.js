const userRepo = require("../repository/user");
const roleRepo = require("../repository/role");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { secret } = require("../config");
const NotFound = require("../errors/NotFound");
const PreconditionFailed = require("../errors/PreconditionFailed");

const generateToken = (id, email, role) => {
    const payload = {
        id,
        email,
        role,
    };
    return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authservice {
    async registration(email, password, username) {
        if ((await userRepo.findUserByEmail(email)) !== null) {
            throw new PreconditionFailed("user exist");
        }
        const hashPassword = bcrypt.hashSync(password, 5);
        const userRole = await roleRepo.findRole("admin");
        await userRepo.addUser(username, email, hashPassword, userRole);
        return new Response("200", "User sacsessful added");
    }
    async login(email, password) {
        if ((await userRepo.findUserByEmail(email)) == null) {
            throw new NotFound("user  does not exist");
        }
        const user = await userRepo.findUserByEmail(email);
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            throw new NotFound("Incorrect password");
        }
        const token = generateToken(user.id, user.email, user.role);
        return { token };
    }
    async logout() {
        const token = { token: 0 };
        return token;
    }
    async deleteAccount(id) {
        await userRepo.delUser(id);
        const token = { token: 0 };
        return token;
    }
}

module.exports = new authservice();
