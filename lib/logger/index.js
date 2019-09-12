const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatOut = bformat({
  outputMode: 'short'
});

class Logger {
  constructor(name) {
    const config = Logger.DEFAULTS;
    config.name = name || config.name;
    return bunyan.createLogger(config);
  }

  static get DEFAULTS() {
    return {
      name: 'logger',
      level: 'debug',
      streams: [{
          type: 'file',
          path: `${process.cwd()}/logger.log`,
          period: '1d',
          count: 30
        },
        {
          stream: formatOut
        }
      ]
    };
  }
}

module.exports = Logger;
