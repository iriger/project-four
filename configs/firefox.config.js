const baseConfig = require('../cypress.config');

module.exports = {
  ...baseConfig,
  viewportWidth: 1366,
  viewportHeight: 768,
  browser: 'firefox',
};