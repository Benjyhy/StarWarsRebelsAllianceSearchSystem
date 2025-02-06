const DetailsHandler = require('../handlers/detailsHandler');

module.exports = [
    {
        method: 'GET',
        path: '/details/{type}/{id}',
        options: { auth: 'simple' },
        handler: DetailsHandler.getDetails
    }
];
