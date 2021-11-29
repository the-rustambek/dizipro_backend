const userController = require('../controllers/userController');

const userRoute =  require('express').Router();


userRoute.post("/account", userController.userCreateAccountPostController)
module.exports = userRoute;