const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");
const playlist = require("./playlist");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.usersPath = "/api/users";
        this.playlistPath = "/api/playlist";
        this.cuentasPath = "/api/cuentas";
        this.auth = "/api/auth";
        this.accounsPath = "api/accounts"

        this.connectionToDb();
        this.middewares();
        this.routes();

    }

    async connectionToDb() {
        await dbConnection();
    }

    middewares() {
        this.app.use(cors()); // acceeso de consulta api
        this.app.use(express.json());// para comunicarce por json
        this.app.use(express.static("public"));

    }

    routes() {
        this.app.use(this.usersPath, require("../routes/user"));  //ruta user endpoint
        this.app.use(this.playlistPath, require("../routes/playlist")); // ruta playlis endpoint
        this.app.use(this.cuentasPath, require("../routes/cuentas")); // ruta cuentas endpoint
        this.app.use(this.auth, require("../routes/auth")); // ruta auth endpoint
        this.app.use(this.accounsPath, require("../routes/accounts-playlist")); // ruta playlis cuentas endpoint

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running, port: ${this.port}`);
        });
    }
}

module.exports = Server;