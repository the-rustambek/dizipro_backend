const {Sequelize } = require('sequelize');

if(!process.env.PG_CONNECTION_URL){
    throw new Error("PG connection string not found");

}

const sequelize =  new Sequelize(process.env.PG_CONNECTION_URL,{
    logging:false,
});

module.exports = async function pg(){
    try {
        await sequelize.authenticate();

        let db =  {};

        return db;

    } catch (error) {
        console.log("Sql Error", error);
    }
}