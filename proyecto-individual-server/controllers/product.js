const { Product } = require("../models/product");

const getProducts = async (req, res) => {
  const producto = await Product.find();
  res.json(producto);
};

const findByProducts = async (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id no encontradozz" });
    });
};
const UpdateByProducts = async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ _id: id }, req.body);
  res.json({ message: "Datos Modificados" });
};
const deleteByProducts = async (req, res) => {
  const { id } = req.params;
  await Product.remove({ _id: id });
  res.json({ message: "Datos Eliminados" });
};
const createProducts = async (req, res) => {
    if (req.file === null) {
        return res.status(400).send({ message: 'No file was uploaded' });
    }
    const url = req.protocol + '://' + req.get('host')
    const urlImage = url + '/upload/' + req.file.filename;
    const modelData = {
        title: req.body.title,
        model: req.body.model,
        price: req.body.price,
        img: urlImage,
        quantity: req.body.quantity,
      
    }

    const products = new Product(modelData);
    products.save();
    res.json(products);
}

module.exports = {
  getProducts,
  createProducts,
  findByProducts,
  UpdateByProducts,
  deleteByProducts,
};
