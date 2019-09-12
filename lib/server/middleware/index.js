const Logger = require('../../logger');
const logger = new Logger('middleware');

function logIPandPath(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  logger.info(`${ip} ${req.originalUrl}`);
  next();
}

function isAdmin(req, res, next) {
  next();
}

function isLoggedIn(req, res, next) {
  next();
}

module.exports = {
  isAdmin,
  isLoggedIn,
  logIPandPath
};
