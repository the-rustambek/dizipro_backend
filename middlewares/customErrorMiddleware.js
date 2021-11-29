const customError = require('../helpers/customError');


module.exports.customErrorMiddleware =  function customErrorMiddleware(req,res,next){
    res.error = customError.customError;
    next();
}