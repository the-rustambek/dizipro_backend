require("dotenv").config();
const express = require("express");
const {databaseMiddleware} =  require("./middlewares/databaseMiddleware");

const app = express();

const PORT =  process.env.PORT || 8080;

async function server(){
    try {
        app.listen(PORT,() => console.log(`Server ready at ${PORT}`));

        app.use(express.json());

        app.use(express.urlencoded({
            extended:true,
        }));

        app.use(databaseMiddleware());


    } catch (error) {
        console.log("Server error:", error);
    }
}

server();