const express = require("express");
const routerProduct = express.Router();
const {
  getProduct,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
} = require("../controllers/product");

const uploadMulter = require("../config/multer");
/**Get all productos */
routerProduct.get("/productos", getProduct);
routerProduct.post(
  "/productos",
  uploadMulter.single("img"),
  createProduct
);
routerProduct.get("/productos/:id", findByProduct);
routerProduct.put("/productos/:id", UpdateByProduct);
routerProduct.delete("/productos/:id", deleteByProduct);

module.exports = routerProduct;
