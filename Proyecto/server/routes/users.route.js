const express = require("express");
const routerUser = express.Router();
const {getUsers,createUser,findByUser,UpdateByUser,deleteByUser} = require('../controllers/userController');

/**Get all users */
routerUser.get('/users', getUsers);
routerUser.post('/users',createUser);
routerUser.get('/users/:id', findByUser);
routerUser.put('/users/:id',UpdateByUser);
routerUser.delete('/users/:id',deleteByUser);

module.exports=routerUser;