const Hapi = require('hapi');
const env = process.env.API_ENV || 'dev';
const envConfig = require(`./src/config/env/${env}`); //eslint-disable-line
const routes = require('./src/routes');

const server = Hapi.server({
    port: envConfig.port,
    host: envConfig.host
});

server.route(routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();