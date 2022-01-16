const mongoose = require("mongoose");



const role = mongoose.Schema({
    role: {type: String, unique: true, default: "user"},
})

module.exports = mongoose.model('role', role)
//model ('role', role)