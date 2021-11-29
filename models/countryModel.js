module.exports = async (sequelize, Sequelize) => {
	return await sequelize.define("countries", {
		country_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		country_name: {
			type: Sequelize.STRING,
			allowNull: false,
            // schema: Joi.string().min(4).required().error(new customError(400,"Name is invalid"))
		},
		country_code: {
			type: Sequelize.STRING,
			allowNull: false,
            // schema: Joi.string().required().error(new customError(400,"Code is invalid"))
		},
	});
};