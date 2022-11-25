const express = require("express");
const routerProduct = express.Router();
const { getProduct, createProduct,findByProduct, UpdateByProduct, deleteByProduct } = require('../controllers/ProductController');

/**Get all productos */
routerProduct.get('/productos', getProduct);
routerProduct.post('/productos',createProduct);
routerProduct.get('/productos/:id', findByProduct);
routerProduct.put('/productos/:id',UpdateByProduct);
routerProduct.delete('/productos/:id',deleteByProduct);

module.exports=routerProduct;