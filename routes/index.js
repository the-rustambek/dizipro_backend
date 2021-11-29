const Router = require('express').Router();

const countryRoute = require('./countryRoute');
const homeRoute = require("./homeRoute");

Router.use("/",homeRoute);
Router.use("/countries", countryRoute);

module.exports = Router;

