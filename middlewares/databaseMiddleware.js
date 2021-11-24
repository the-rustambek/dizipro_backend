const pg = require("../modules/pg/pg");

module.exports.databaseMiddleware = async function databaseMiddleware(req, res, next) {
    const db = await pg();
    req.db = db;
    next();

}