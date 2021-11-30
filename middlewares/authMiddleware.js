const {
    checkToken
} = require("../modules/jwt");

module.exports = async function authMiddleware(req, res, next) {
    try {
        const token = req.headers["authorization"];
        // console.log(token);

        if (!token) throw new res.error(401, "Unauthorized");

        const data = checkToken(token);

        if (!data) throw new res.error(401, "Unauthorized");

        const session = await req.db.sessions.findOne({
            where: {
                session_id: data.session_id,
            },
            include: req.db.users,
            raw: true,
        });

        console.log(session)

        // if (!session) throw new res.error(401, "Unauthorized");

        // req.session = session;

        next();


    } catch (error) {
        next(error)
    }
}