const handleProducts = require('../../controllers/product')
const adminRouter = require('express').Router(); 
const { ValidateProduct } = require('../../models/product')
const ValidateRequest = require('../../middlewares/validateRequest')
const uploadMulter = require("../../config/multer");

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/',[uploadMulter.single('img'), ValidateProduct], handleProducts.addProduct)

adminRouter.patch('/:id/:attr/:value', ValidateRequest, handleProducts.updateOneProduct)

adminRouter.delete('/:id', handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', handleProducts.deleteMultipleProducts)


module.exports = adminRouter;