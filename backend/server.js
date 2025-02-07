'use strict';

const Hapi = require('@hapi/hapi');
const AuthRoutes = require('./routes/authRoutes');
const SearchRoutes = require('./routes/searchRoutes');
const DetailsRoutes = require('./routes/detailsRoutes');
const Bcrypt = require('bcrypt');
const { users } = require('./db/users');

const validate = async (request, username, password) => {
    const user = users[username.toLowerCase()];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: '0.0.0.0',
    });

    await server.register(require('@hapi/basic'));
    server.auth.strategy('simple', 'basic', { validate });
    
    server.route([...AuthRoutes, ...SearchRoutes, ...DetailsRoutes]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
