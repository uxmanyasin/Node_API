require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errormiddleware = require('./middleware/errorMiddleware')
const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/api/products',productRoute);
app.use(errormiddleware);
mongoose.
connect(MONGO_URL)
.then(()=>
{
    console.log('Conntected to MongoDB')
    app.listen(PORT, ()=>
{
    console.log("Node APi app is running on port :${PORT}")
})
}).catch((error)=>
{
    console.log(error)
})