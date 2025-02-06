const SearchHandler = require('../handlers/searchHandler');

module.exports = [
    {
        method: 'GET',
        path: '/search',
        options: { auth: 'simple' },
        handler: SearchHandler.search
    }
];
