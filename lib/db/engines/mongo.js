const mongoose = require("mongoose");
const models = require("./mongoose");
const Logger = require("../../logger");

class MongoEngine {
  constructor(config) {
    this.config = config;
    this.logger = new Logger("mongo engine");
    this.mongoose = mongoose.connect(
      config.url,
      config.mongooseCfg
    );
    this.models = models;
  }
  async saveEmail(email) {
    const Email = new this.models.Email(email);
    await Email.save();
  }
  async start() {
    this.logger.info("Mongo Engine Started");
  }
}

module.exports = MongoEngine;
