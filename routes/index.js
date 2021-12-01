const Router = require('express').Router();

const countryRoute = require('./countryRoute');
const homeRoute = require("./homeRoute");
const userRoute = require('./userRoute');


Router.use("/countries", countryRoute);
Router.use("/users", userRoute);
Router.use("/",homeRoute);

module.exports = Router;

