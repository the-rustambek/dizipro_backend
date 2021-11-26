const {Sequelize } = require('sequelize');
const countryModel =  require("../../models/countryModel");
const init = require("./init");


if(!process.env.PG_CONNECTION_URL){
    throw new Error("PG connection string not found");

}

const sequelize =  new Sequelize(process.env.PG_CONNECTION_URL,{
    logging:console.log,
});

module.exports = async function pg(){
    try {
        await sequelize.authenticate();

        let db =  {};
        db.countries = await countryModel(sequelize, Sequelize);

        await sequelize.sync({
            force:false,
        });

        return db;

    } catch (error) {
        console.log("Sql Error", error);
    }
}