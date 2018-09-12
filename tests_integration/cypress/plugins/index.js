console.log('Adding env variables');

module.exports = (on, config) => {
  require('dotenv').config();

  config.baseUrl = process.env.ROAM_URL;
  config.env.ROAM_URL = process.env.ROAM_URL;
  return config;
};
