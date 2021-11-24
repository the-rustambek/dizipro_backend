const bcrypt =require("bcrypt");

module.exports.generateCrypt =  function generateCrypt(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));

}

module.exports.compareCrypt = function compareCrypt(password, crypt){
    return bcrypt.compare(password, crypt);
}