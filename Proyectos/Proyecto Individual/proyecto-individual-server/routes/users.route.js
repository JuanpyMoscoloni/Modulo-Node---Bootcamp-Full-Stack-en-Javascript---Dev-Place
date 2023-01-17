const express = require("express");
const router = express.Router();

const { ValidateUser } = require('../models/users.models')
const {getUsers,createUser,findByUser,UpdateByUser,deleteByUser} = require('../controllers/userController');
const authLogin=require("../controllers/authController")


/**Get all users */
router.get('/users/', getUsers);
router.post('/users/',ValidateUser,createUser);
router.get('/users/:id', findByUser);
router.put('/users/:id',UpdateByUser);
router.delete('/users/:id',deleteByUser);
router.post('/login/',authLogin);
module.exports=router;