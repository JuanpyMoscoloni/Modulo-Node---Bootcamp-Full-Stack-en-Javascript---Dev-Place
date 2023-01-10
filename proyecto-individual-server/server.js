require("dotenv").config();
const express = require("express");
const port = 5050;
const app = express();
var cors = require("cors");

const routerU = require("./routes/users.route");
const routerP = require("./routes/productos.route");
/**Cadena conexion con mongo */
const mongose = require("mongoose");
mongose
  .connect("mongodb://127.0.0.1:27017/tiendaSnkrs")
  .then(() => console.log("Connect MongoDB"))
  .catch((err) => {
    console.error(err);
  });
/**Fin de cadena conexion */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerU);
app.use(routerP);
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});
