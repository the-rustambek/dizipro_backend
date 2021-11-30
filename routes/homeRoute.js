const homeRoute =  require('express').Router();
const {homeGetController} = require('../controllers/homeController');
const authMiddleware = require('../middlewares/authMiddleware');


homeRoute.get("/",homeGetController);
homeRoute.use(authMiddleware)

module.exports = homeRoute;