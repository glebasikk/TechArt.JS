const express = require('express')
const path = require("path")
const mongoose = require("mongoose")
const MongoClient = require("mongodb").MongoClient;
const pizzas    = require("./models/pizza");
const pizzaRouter = require("./routes/pizza")
const app = express()


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(pizzaRouter)





async function start() {
    await mongoose.connect("mongodb+srv://root:root@cluster0.sticc.mongodb.net/pizza?retryWrites=true&w=majority" )
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`)
    })
}


start()





      