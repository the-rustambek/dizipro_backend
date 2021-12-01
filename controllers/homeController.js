module.exports =  class homeController{
    static async homeGetController(req,res,next){
        try {
            console.log(req.session);

            res.json({
                ok:true,

            });
            
        } catch (error) {
            console.log(error, "HomeController da error bor");
            next(error);
        }
    }
}