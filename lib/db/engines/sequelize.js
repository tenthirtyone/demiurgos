const Sequelize = require('sequelize');
const Logger = require('../../logger');

class SequelizeEngine {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('sequelize engine');

    this.sequelize = new Sequelize(
      this.config.database,
      this.config.username,
      process.env.DBPASS,
      {
        logging: this.config.logging,
        dialect: this.config.dialect,
        dialectOptions: {
          connectTimeout: this.config.timeout,
          timezone: this.config.timezone
        }
      });
    this.authenticate();
    this.models = [];
    this.createModels();
  }
  async authenticate() {
    try {
      await this.sequelize.authenticate();
    } catch (e) {
      this.logger.error(e);
      throw(e);
    }
    this.logger.info('connection authenticated');
  }
  // TODO Move to singleton & separate files
  createModels() {
    const Team = this.sequelize.define('team', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    const Player = this.sequelize.define('player', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    Team.Player = Team.hasMany(Player);

    Array.prototype.push.apply(
      this.models,
      [
        Team,
        Player
      ]
    );
  }
  getModel(modelName) {
    return this.models.filter((model) => {
      return model.name === modelName;
    })[0];
  }
  /*
    {
      name: 'The Braying Hounds',
      players: [{
        name: 'Mikael Åkerfeldt'
      },
      {
        name: 'Martin Lopez'
      }]
    }
  */
  async createTeam(team) {
    const Team = this.getModel('team');

    return await Team.create(team, {
      include: [{
        association: Team.Player
      }]
    });
  }
  async sync() {
    this.logger.info('Syncing models to tables');
    await this.sequelize.sync({
      force: true
    });
  }
  async start() {
    this.logger.info('Sequelize Engine Started');
    await this.sync();
  }
}

module.exports = SequelizeEngine;
