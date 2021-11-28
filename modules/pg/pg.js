const {Sequelize } = require('sequelize');
const countryModel =  require("../../models/countryModel");
const init = require("./init");

const {sequelize, Joi, sequelizeJoi} = require("sequelize-joi");
const {customError} =  require("../../helpers/customError");





if(!process.env.PG_CONNECTION_URL){
    throw new Error("PG connection string not found");

}

const sequelize =  new Sequelize(process.env.PG_CONNECTION_URL,{
    logging: false,
});

sequelizeJoi(sequelize);


module.exports = async function pg(){
    try {
        await sequelize.authenticate();

        let db =  {};
        db.countries = await countryModel(sequelize, Sequelize, Joi,customError);

        await sequelize.sync({
            force:false,
        });

        await init(db);

        // const countries = await db.countries.findAll({
        //     raw:true,
        // })
        // console.log(countries);
        return db;

    } catch (error) {
        console.log("Sql Error", error);
    }
}