const Joi = require("joi")

module.exports = class userValidations {
    static async userCreateAccountValidation(data, customError) {
        return await Joi.object({
            user_name: Joi.string().min(2).max(64).required().error(new customError(400, "Name is invalid")),
            user_email: Joi.string().email().required().lowercase().error(new customError(400, "Email is invalid")),
            user_gender: Joi.string().valid("male","female").required().error(new customError(400, "Gender is invalid")),
            user_password: Joi.string().min(4).required().error(new customError(400, "Password is invalid")),
            country_id: Joi.number().required().error(new customError(400, "Country id is invalid")),
        }).validateAsync(data);
    }

    static async userLoginAccountValidation(data, customError){
        return await Joi.object({
            user_email: Joi.string().email().required().lowercase().error(new customError(400, "Email is invalid")),
            user_password: Joi.string().required().min(4).error(new customError(400, "Password is invalid")),
        }).validateAsync(data)
    }
}