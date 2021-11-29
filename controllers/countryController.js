module.exports = class countryController{
    static async countryGetController(req, res,next){
        try {
            const countries =  await req.db.countries.findAll();

            res.json({
                ok:true,
                message: "Ok",
                data:{
                    countries,
                }
            })
        } catch (error) {
            next(error);
        }
    }
}