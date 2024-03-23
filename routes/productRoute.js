
const express = require('express')
const router  = express.Router()
const {createProduct,getProducts,getProduct,editProduct,deleteProduct} = require('../controllers/productController')


router.post('/',createProduct)

router.get('/',getProducts)

router.get('/:id',getProduct)

router.put('/:id',editProduct)

router.delete('/:id',deleteProduct)


module.exports = router;