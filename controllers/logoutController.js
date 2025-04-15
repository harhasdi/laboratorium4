const { getProcessLog } = require('../utils/logger');

const getLogoutView = (req, res) => {
  res.render('logout');
};

const killApplication = (req, res) => {
  getProcessLog('Zamykanie aplikacji');
  process.exit();
};

module.exports = {
  getLogoutView,
  killApplication
};
