const express = require('express')
const connection=require("./index")
const port = 5000
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const client=require("./routes/clients")
const productRoutes=require("./routes/products")


app.use("/client",client)
app.use("/product",productRoutes)



app.listen(port, ()=>{
    console.log(`listening on ${port}`)
    })