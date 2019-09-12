const engines = require("./engines");
const Logger = require("../logger");

class DB {
  constructor(config) {
    this.config = config;
    this.logger = new Logger("database");
    const { engine } = this.config;
    this.engine = new engines[engine](this.config[engine]);
  }
  async init() {
    if (this.engine) {
      this.logger.info(`started with engine: ${this.config.engine}`);
      await this.engine.start();
    } else {
      this.logger.error(`failed to start with engine: ${this.config.engine}`);
    }
  }
  async saveEmail(email) {
    await this.engine.saveEmail(email);
  }
}

module.exports = DB;
