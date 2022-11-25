
const Product = require('../models/product.model');

const getProduct = async (req, res) => {
    const producto = await Product.find();
    res.json(producto);
}
const findByProduct = async (req, res) => {

    const { id } = req.params;
    Product.findById(id).then((data) => {
        res.json(data);
    }).catch(() => {
        res.json({ 'message': 'Id no encontrado' });
    })
}
const UpdateByProduct = async (req, res) => {

    const { id } = req.params;
    await Product.updateOne({ _id: id }, req.body);
    res.json({ 'message': 'Datos Modificados' });
}
const deleteByProduct = async (req, res) => {
    const { id } = req.params;
    await Product.remove({ _id: id });
    res.json({ 'message': 'Datos Eliminados' });
}
const createProduct = async (req, res) => {
    const producto = new Product(req.body);
    producto.save();
    res.json(producto);
}
module.exports = { getProduct, createProduct,findByProduct, UpdateByProduct, deleteByProduct }