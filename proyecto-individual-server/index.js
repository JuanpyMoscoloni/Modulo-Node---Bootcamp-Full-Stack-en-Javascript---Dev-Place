const express = require('express');
const app = express();
require('./routes/sneaks.routes.js')(app);
require('dotenv').config();
const SneaksAPI = require('./controllers/sneaks.controllers.js');

var port = process.env.PORT || 4000;
mongoose.Promise = global.Promise;

const mongose = require("mongoose");
mongose
  .connect("mongodb://localhost:27017/tienda")
  .then(() => console.log("Connect MongoDB"))
  .catch((err) => {
    console.error(err);
  });
/*app.listen(port, function () {
  console.log(`Sneaks app listening on port `, port);
 });*/


module.exports = app;
module.exports = SneaksAPI;
