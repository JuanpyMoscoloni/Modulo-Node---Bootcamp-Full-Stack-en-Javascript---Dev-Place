const express = require("express");
const port = 3000;
const app = express();

const router = express.Router();

const routerU = require('./routes/users.route');
const routerP = require('./routes/productos.route');
/**Cadena conexion con mongo */
const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27017/tienda')
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(routerU);
app.use(routerP);
app.use(express.static(__dirname));



app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})