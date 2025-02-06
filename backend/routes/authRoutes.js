const AuthHandler = require('../handlers/authHandler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: AuthHandler.welcome
    },
    {
        method: 'POST',
        path: '/login',
        handler: AuthHandler.login
    }
];
