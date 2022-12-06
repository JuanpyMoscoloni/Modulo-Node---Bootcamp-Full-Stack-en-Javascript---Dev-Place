require("dotenv").config({ path: "./.env" });
const express = require("express");
const port = 5050;
const app = express();
var cors = require("cors");

const routerU = require("./routes/users.route");

/**Cadena conexion con mongo */
const mongose = require("mongoose");
mongose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connect MongoDB"))
  .catch((err) => {
    console.error(err);
  });
/**Fin de cadena conexion */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerU);
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});
