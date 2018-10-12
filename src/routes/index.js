
const authModule = require('../services/auth');
const Joi = require('joi');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
    
            return 'Hello!';
        },
    },
    {
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            try {
                const user = authModule.login(request);
                return 'user';
            } catch (error) {
                throw error;
            }
        },
        options: {
            validate: {
                query: {
                    username: Joi.string().required(),
                    password: Joi.string().required(),
                    grade: Joi.number().integer().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/register',
        handler: (request, h) => {
            try {
                const user = authModule.register(request);
                return 'user';
            } catch (error) {
                throw error;
            }
        },
        options: {
            validate: {
                query: {
                    username: Joi.string().required(),
                    password: Joi.string().required(),
                    grade: Joi.number().integer().required()
                }
            }
        }
    }
];

module.exports = routes;