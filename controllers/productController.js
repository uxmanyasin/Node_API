const Product = require('../models/productModel')


const createProduct = async(req,res) =>
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
}

const getProducts = async(req,res)=>
{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProduct = async(req,res)=>
{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } 
    catch (error) {
         res.status(500).json({message: error.message})
    }
}

const editProduct = async(req,res)=>
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
}

const deleteProduct = async(req,res)=>
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
}

module.exports = {
    createProduct, 
    getProducts,
    getProduct,
    editProduct,
    deleteProduct
}