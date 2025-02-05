const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()
app.use(express.json())
//routes

app.get('/',(req,res) =>
{
    res.send('HELLO NODE API')
})

app.get('/blog',(req,res) =>
{
    res.send('HELLO Blog')
})

app.post('/product',async(req,res) =>
{
    try
    {
            const product = await Product.create(req.body)
            res.status(200).json(product)
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: error.message}) 
    }
})

app.get('/products',async(req,res)=>
{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id',async(req,res)=>
{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } 
    catch (error) {
         res.status(500).json({message: error.message})
    }
})

app.put('/products/:id',async(req,res)=>
{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product)
        {
            return res.status(404).json({message: 'cannot find any product'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);        
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/products/:id',async(req,res)=>
{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            return res.status(404).json({message: 'cannot find product'})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://uxman:123456789Admin@uxman-dev.d7btojt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=uxman-dev')
.then(()=>
{
    console.log('Conntected to MongoDB')
    app.listen(3000, ()=>
{
    console.log("Node APi app is running on port :3000")
})
}).catch((error)=>
{
    console.log(error)
})