const express = require("express");
const cors = require("cors");


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.usersPath = "/api/users";
        this.playlistPath ="/api/playlist";


        this.middewares();
        this.routes();
    }

    middewares() {
        this.app.use(cors()); // acceeso de consulta api
        this.app.use(express.json());// para comunicarce por json
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usersPath, require("../routes/user"));  //ruta user endpoint
        this.app.use(this.playlistPath, require("../routes/playlist")); // ruta playlis endpoint 

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running, port: ${this.port}`);
        });
    }
}

module.exports = Server;