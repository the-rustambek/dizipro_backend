require("dotenv").config();
const express = require("express");


const {databaseMiddleware} =  require("./middlewares/databaseMiddleware");
const {customErrorMiddleware} =  require("./middlewares/customErrorMiddleware");
const routes = require("./routes");
const app = express();

const PORT =  process.env.PORT || 8080;

async function server(){
    try {
        app.listen(PORT,() => console.log(`Server ready at ${PORT}`));

        app.use(express.json());

        app.use(express.urlencoded({
            extended:true,
        }));

        app.use(databaseMiddleware);

        app.use(customErrorMiddleware)

        app.use("/v1",routes);
    } catch (error) {
        console.log("Server error:", error);
    }
}

server();