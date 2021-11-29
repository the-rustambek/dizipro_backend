module.exports = async function(db){
    db.countries.hasMany(db.users,{
        foreignKey:{
            name: "country_id",
            allowNull: false,
        }
    });
    db.users.belongsTo(db.countries,{
        foreignKey:{
            name: "country_id",
            allowNull: false,
        }
    });
}