const logger = require('../utils/logger');
const stats = require('../utils/statistics');

module.exports = (req, res, next) => {
  logger.getInfoLog(req.method, req.url);
  stats.increaseVisit();
  console.log(`Visits: ${stats.getVisits()}`);
  next();
};
