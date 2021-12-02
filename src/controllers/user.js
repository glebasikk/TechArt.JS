const express = require('express')
const userService = require("../service/user");

const app = express()
const port = 3000

// let x = users.allUsers()
// let xx =x

class UserController {
    async findUserByEmail(req, res, next) {
        res.json( userService.findUserByID(id));
    }
}




