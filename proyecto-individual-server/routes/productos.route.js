const express = require('express');
const routerProduct = express.Router();
const {
  createProducts,
  findByProducts,
  UpdateByProducts,
  deleteByProducts,
  getProducts,

} = require('../controllers/product');

const uploadMulter = require('../config/multer');
/**Get all productos */

routerProduct.post(
  '/productos',
  uploadMulter.single('img'),
  createProducts
);
routerProduct.get('/productos/', getProducts);
routerProduct.get('/productos/:id', findByProducts);
routerProduct.put('/productos/:id', UpdateByProducts);
routerProduct.delete('/productos/:id', deleteByProducts);

module.exports = routerProduct;
