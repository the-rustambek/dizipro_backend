const {
    generateCrypt
} = require("../modules/bcrypt")
const userValidations = require("../validations/userValidation")
module.exports = class userController {
    static async userCreateAccountPostController(req, res, next) {
        try {

            const data = await userValidations.userCreateAccountValidation(req.body, res.error);

            const user = await req.db.users.create({
                ...data,
                user_password:generateCrypt(data.user_password),
            });
            // console.log(user);


            const session = await req.db.sessions.create({
                session_user_agent: req.headers["user_agent"] || "Unknown",
                user_id: user_dataValues.user_id,
            });

            
			const token = createToken({
				session_id: session.dataValues.session_id,
				role: "user",
			});


            res.status(201).json({
                ok:true,
                message:"User created successfully",
                data:{

                }
            })
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