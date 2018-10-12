const axios = require('axios');
const env = process.env.API_ENV || 'dev';
const envConfig = require(`../../config/env/${env}`); //eslint-disable-line

class AuthModule {

    async login(req, res, next) {
        const url = `${envConfig.authApi}/api/users`;
        
        try {
            await axios.get(url, {
                params: {
                    username: req.query.login,
                    password: req.query.password,
                    grade: req.query.grade,
                }
            })
            .then((response) => {
                return response;
            })  
        } catch (error) {
            throw error;
        }
    }
    
    async register(req, res, next) {
        const url = `${envConfig.authApi}/api/users`;
        try {
            await axios.post(url, {
                username: req.query.login,
                password: req.query.password,
                grade: req.query.grade,
            })
            .then((response) => {
                return response;
            })  
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthModule();