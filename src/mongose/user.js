const mongoose = require("mongoose");



const user = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true},
    roles: [{type: String, ref: 'role'}]
})

module.exports = mongoose.model ('user', user)