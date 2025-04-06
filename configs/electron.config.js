const dotenv = require('dotenv');
dotenv.config();

const baseConfig = require('../cypress.config');

module.exports = {
  ...baseConfig,
  e2e:{
    ...baseConfig.e2e,
    baseUrl: process.env.CYPRESS_BASE_URL || "https://telnyx.com",
    viewportWidth: 1536,
  viewportHeight: 960,
  browser: 'electron'
  }
};