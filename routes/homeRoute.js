const homeRoute =  require('express').Router();

homeRoute.get("/",(req,res) =>{
    console.log(req.db);
    res.json({
        ok:true,
    })
})