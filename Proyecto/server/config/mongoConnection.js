const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tienda')
    .then(()=>{console.log('Connection established')})
    .catch(error => handleError(error));

