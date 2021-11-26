require("dotenv").config();
const express = require("express");


// const {databaseMiddleware} =  require("./middlewares/databaseMiddleware");
const {customErrorMiddleware} =  require("./middlewares/customErrorMiddleware");
const routes = require("./routes");
const app = express();
const pg = require("./modules/pg/pg");




async function server(){
    try {
        const db =  await pg();

        app.listen(process.env.PORT || 80, () =>
        console.log(`Server ready ${process.env.PORT || 80}`));


        app.use(express.urlencoded({
            extended:true,
        }));

        app.use(express.json());

        app.use((req,res,next)=>{
            req.db = db;
            next();
        });

        app.use(customErrorMiddleware);

        // app.use(databaseMiddleware);
        app.use("/v1",routes);

    } catch (error) {
        console.log("Server error:", error);
    }
}

server();