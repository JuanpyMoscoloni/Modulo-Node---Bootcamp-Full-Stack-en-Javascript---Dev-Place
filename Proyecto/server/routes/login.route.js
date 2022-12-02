const express = require("express"); 
const loginRoutes = express.Router();
const authLogin=require("../controllers/authController")

loginRoutes.post('/login',authLogin);

module.exports=loginRoutes;