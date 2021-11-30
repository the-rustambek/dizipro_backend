const userController = require('../controllers/userController');

const userRoute =  require('express').Router();


userRoute.post("/account", userController.userCreateAccountPostController);
userRoute.post("/",userController.userLoginAccountPostController);

module.exports = userRoute;