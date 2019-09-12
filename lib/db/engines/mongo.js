
const mongoose = require('mongoose');
const models = require('./mongoose');
const Logger = require('../../logger');

class MongoEngine {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('mongo engine');
    this.mongoose = mongoose.connect(config.url, config.mongooseCfg);
    this.models = models;
  }
  async createUser(user) {
    const User = new this.models.User(user);
    await User.save();
  }
  async getUser(user) {
    return this.models.User.findOne(user);
  }
  async isUser(user) {

  }
  async start() {
    this.logger.info('Mongo Engine Started');
  }
}

module.exports = MongoEngine;
