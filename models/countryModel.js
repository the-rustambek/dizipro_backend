module.exports = async (sequelize, Sequelize)=>{
    return await sequelize.define('countries',{

        country_id:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        country_iso:{
           type: Sequelize.STRING(2),
           allowNull:false
        },
        country_name:{
            type:Sequelize.STRING(32),
            allowNull:false,
        },
        country_nicename:{
            type:Sequelize.STRING(32),
            allowNull:false,
        },
        country_iso3:{
            type:Sequelize.STRING(3),
            allowNull:false,
        },
        country_num_code:{
            type:Sequelize.STRING(3),
            allowNull:false,
        },
        country_phone_code:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
    })
}