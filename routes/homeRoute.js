const homeRoute =  require('express').Router();
const {homeGetController} = require('../controllers/homeController');
const authMiddleware = require('../middlewares/authMiddleware');



homeRoute.use(authMiddleware);
homeRoute.get("/",homeGetController);


module.exports = homeRoute;