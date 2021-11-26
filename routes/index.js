const Router = require('express').Router();

const homeRoute = require("./homeRoute");

Router.use("/",homeRoute);

module.exports = Router;

