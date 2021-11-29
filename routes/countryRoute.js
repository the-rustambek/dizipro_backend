const {countryGetController} = require("../controllers/countryController");

const countryRoute =  require("express").Router();

countryRoute.get("/", countryGetController);

module.exports = countryRoute;
