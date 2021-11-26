const homeRoute =  require('express').Router();
const {homeGetController} = require('../controllers/homeController');


homeRoute.get("/",homeGetController);

module.exports = homeRoute;