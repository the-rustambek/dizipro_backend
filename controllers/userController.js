const {generateCrypt} = require("../modules/bcrypt")
module.exports = class userController{
    static async userCreateAccountPostController(req, res,next){
        try {
            const user  = await req.db.users.create({
                ...req.body,
                user_password: generateCrypt(req?.body?.user_password),
            });

            console.log(user);
        } catch (error) {

            console.log(error, "error chiqyapti")

            if (error.message.startsWith("notNull Violation")) {
				error.code = 400;
				error.message = "Country is invalid";
			} else if (error.message.includes("Validation error")) {
				error.code = 400;
				error.message = "Email already exists";
			}
            next(error);
        }
    }
}