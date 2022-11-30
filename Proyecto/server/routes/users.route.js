const router = require("express").Router();
const productsRouter = require("./products/products");
const adminRouter = require("./admin/admin");

router.use("/products", productsRouter);

router.use("/admin", adminRouter);

module.exports = router;
