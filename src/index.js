const express = require('express')
const path = require("path")
const pizzaRouter = require("./routes/pizza")

const app = express()



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/" ,(req,res) =>{
    res.json({"hello world": "hi"})
})
app.use(pizzaRouter)

async function start() {
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`)
    })
}
start()
