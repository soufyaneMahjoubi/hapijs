const axios = require('axios');
const env = process.env.API_ENV || 'dev';
const envConfig = require(`../../config/env/${env}`); //eslint-disable-line

class ExportModule {

}

module.exports = new ExportModule();