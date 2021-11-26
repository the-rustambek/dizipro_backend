require("dotenv").config();
const express = require("express");


// const {databaseMiddleware} =  require("./middlewares/databaseMiddleware");
const {customErrorMiddleware} =  require("./middlewares/customErrorMiddleware");
const routes = require("./routes");
const pg = require("./modules/pg/pg");
const app = express();

const PORT =  process.env.PORT || 8080;

async function server(){
    try {
        const db =  await pg();

        app.listen(PORT,() => console.log(`Server ready at ${PORT}`));

        app.use(express.json());

        app.use(express.urlencoded({
            extended:true,
        }));

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