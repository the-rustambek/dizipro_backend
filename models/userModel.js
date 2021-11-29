module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false,
            // schema: Joi.string().min(4).required().error(new customError(400,"Name is invalid"))
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
            // schema: Joi.string().required().error(new customError(400,"Code is invalid"))
        },
        user_gender: {
            type: Sequelize.ENUM,
            values: ["male", "female"],
            allowNull: false,
        },
        user_password: {
            type: Sequelize.STRING,
            allowNull: false

        },
        user_role: {
            type: Sequelize.ENUM,
            values: ["user", "admin"],
            defaultValue: "user",
            allowNull: false,
        }
    });
};