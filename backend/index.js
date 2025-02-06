'use strict';

const Hapi = require('@hapi/hapi');
const {SwapiRoutes, SwapiBaseUrl} = require('./constants');
const {getIdFromUrl, getTypeFromUrl} = require('./helper');
const Bcrypt = require('bcrypt');
const {users} = require('./db');

const validate = async (request, username, password) => {

    const user = users[username.toLowerCase()];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await Bcrypt.compare(password, user.password);
    console.log(`Authentication attempt for ${username}:`, isValid, password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    await server.register(require('@hapi/basic'));
    server.auth.strategy('simple', 'basic', { validate });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Welcome to Star Wars Rebels Alliance Search System';
        }
    });

    server.route({
        method: 'GET',
        path: '/search',
        options: {
            auth: 'simple',
        },
        handler: async (req, h) => {
            try {
                const filters = req.query.types.split(',');
                const filteredSwapiRoutes = SwapiRoutes.filter((swapiRoute) => filters.includes(swapiRoute.type));
                const results = await Promise.all(filteredSwapiRoutes.map(async (swapiRoute) => {
                    try {
                        const response = await fetch(`${swapiRoute.url}?search=${req.query.searchParam}`);
                        const data = await response.json();
                        return data.results.map((result) => ({
                            id: getIdFromUrl(result.url),
                            type: getTypeFromUrl(result.url),
                            name: result.name || result.title
                        }));

                    } catch(error) {
                        console.error('Error fetching data:', error);
                        return [];
                    }
                }))
                const combinedResults = results.flat();
                return { count: combinedResults.length, results: combinedResults };
            } catch (error) {
                console.error('Error fetching data:', error);
                return h.response({ error: 'Failed to fetch data' }).code(500);
            }
        }    
    })

    server.route({
        method : 'GET',
        path: '/details/{type}/{id}',
        options: {
            auth: 'simple',
        },
        handler: async (req, h) => {
            try {
                const endpoint = `${SwapiBaseUrl}${req.params.type}/${req.params.id}`;
                const result = await fetch(endpoint);
                const data = await result.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return h.response({ error: 'Failed to fetch data' }).code(500);
            }
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();