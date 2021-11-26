module.exports =  class homeController{
    static async homeGetController(req,res,next){
        try {
            

            res.json({
                ok:true,

            });
            
        } catch (error) {
            next(error);
        }
    }
}