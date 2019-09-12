const config = require("../config");
const Logger = require("../logger");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { publicRoutes, privateRoutes, adminRoutes, api } = require("./routes");
const { isAdmin, isLoggedIn, logIPandPath } = require("./middleware");
const DB = require("../db");

class Server {
  constructor() {
    this.logger = new Logger("server");
    this.config = config.server;
    this.env = process.env.NODE_ENV || "development";
    this.port = this.config.port;
    this.server = express();

    this.server.use(
      bodyParser.urlencoded({
        extended: this.config.urlEncodedExtension
      })
    );
    this.server.use(bodyParser.json());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use("/public", express.static("./public"));
    this.server.use(logIPandPath);
    this.db = new DB(config.db);

    // DB available with req.app.get('db)
    this.server.set("db", this.db);
    this.server.set("env", this.env);
    this.server.set("json spaces", this.config.jsonSpaces);
  }
  start() {
    this.db.init();
    this.server.use("/api", api);
    this.server.use("/", publicRoutes);
    this.server.use("/app", isLoggedIn, privateRoutes);
    this.server.use("/admin", isAdmin, adminRoutes);

    this.server.listen(this.port, () => {
      this.logger.info(`Server listening @${this.port}`);
    });
  }
}

module.exports = Server;
