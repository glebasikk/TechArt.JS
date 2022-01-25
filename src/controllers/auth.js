const authService = require("../service/auth");
const validator = require("express-validator");
const Response = require("../help/Response");
const PreconditionFailed = require("../errors/PreconditionFailed");

class Auth {
    async allUsers(req, res, next) {
        try {
            let allUsers = await authService.allUsers(req.query.page);
            return res.json(allUsers);
        } catch (e) {
            next(e);
        }
    }
    async registration(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            let response = await authService.registration(
                req.body.email,
                req.body.password,
                req.body.username
            );
            return res.json(new Response("200", "registration complete"));
        } catch (e) {
            next(e);
        }
    }
    async login(req, res, next) {
        try {
            const err = validator.validationResult(req);
            if (!err.isEmpty()) {
                throw new PreconditionFailed("invalid input values ");
            }
            let response = await authService.login(
                req.body.email,
                req.body.password
            );
            return res.json(response);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
    async logout(req, res, next) {
        try {
            let response = await authService.logout();
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }
    async deleteAccount(req, res, next) {
        try {
            let response = await authService.deleteAccount(req.body.userId);
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Auth();
