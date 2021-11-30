const {
    generateCrypt,
    compareCrypt
} = require("../modules/bcrypt")
const userValidations = require("../validations/userValidation")
module.exports = class userController {
    static async userCreateAccountPostController(req, res, next) {
        try {

            const data = await userValidations.userCreateAccountValidation(req.body, res.error);

            const user = await req.db.users.create({
                ...data,
                user_password: generateCrypt(data.user_password),
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


            await res.status(201).json({
                ok: true,
                message: "User created successfully",
                data: {

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



    static async userLoginAccountPostController(req, res, next) {
        try {
            const data = await userValidations.userLoginAccountValidation(req.body, res.error);

            const user = await req.db.users.findOne({
                where: {
                    user_email: data.user_email,
                },
                raw: true,
            });

            if (!user) throw new res.error(404, "User not found");

            const isTrust = compareCrypt(data.user_password, user.user_password);

            if (!isTrust) throw new res.error(400, "Password is incorrect");

            await req.db.sessions.destroy({
                where: {
                    session_user_agent: req.headers["user_agent"] || "Unknown",
                    user_id: user_id
                }
            });

            const session = await req.db.sessions.create({
                session_user_agent: req.headers["user_agent"] || "Unknown",
                user_id: user_id

            })

            const token = createToken({
                session_id: session.dataValues.session_id,
            });

            res.status(201).json({
                ok: true,
                message: "Logged successfully",
                data: {
                    token
                }
            })
        } catch (error) {
            next(error)

        }
    }



}