const {Sequelize } = require('sequelize');
const countryModel =  require("../../models/countryModel");
const relations = require('../../models/relations');
const userModel = require("../../models/userModel");
const userSessionsModel = require('../../models/userSessionsModel');
const init = require("./init");

// const {sequelize} = require("sequelize-joi");
// const {customError} =  require("../../helpers/customError");





if(!process.env.PG_CONNECTION_URL){
    throw new Error("PG connection string not found");

}

const sequelize =  new Sequelize(process.env.PG_CONNECTION_URL,{
    logging: false,
});

// sequelizeJoi(sequelize);


module.exports = async function pg(){
    try {
        await sequelize.authenticate();

        let db =  {};
        db.countries = await countryModel(sequelize, Sequelize);
        db.users = await userModel(sequelize, Sequelize);
        db.sessions =  await userSessionsModel(sequelize,Sequelize);
     
        await relations(db);

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