const express = require("express");
const router = express.Router();

const { ValidateUser } = require('../models/users.models')
const {getUsers,createUser,findByUser,UpdateByUser,deleteByUser} = require('../controllers/userController');
const validateIdMongo = require("../middlewares/validateIdMongo");
const authLogin=require("../controllers/authController")


/**Get all users */
router.get('/', getUsers);
router.post('/',ValidateUser,createUser);
router.get('/:id',validateIdMongo, findByUser);
router.put('/:id',UpdateByUser);
router.delete('/:id',validateIdMongo,deleteByUser);
router.post('/login',authLogin);
module.exports=router;