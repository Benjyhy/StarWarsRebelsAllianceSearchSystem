const { SwapiRoutes } = require('../config/constants');
const { getIdFromUrl, getTypeFromUrl } = require('../utils/helper');

module.exports = {
    search: async (request, h) => {
        try {
            if(!request.query.types) return { count: 0, results: [], message: 'You need to specify some types for your query (ex: people,vehicles)' };
            const filters = request.query.types.split(',');
            const filteredSwapiRoutes = SwapiRoutes.filter(route => filters.includes(route.type));

            const results = await Promise.all(filteredSwapiRoutes.map(async (route) => {
                try {
                    const response = await fetch(`${route.url}?search=${request.query.searchParam}`);
                    const data = await response.json();
                    return data.results.map(result => ({
                        id: getIdFromUrl(result.url),
                        type: getTypeFromUrl(result.url),
                        name: result.name || result.title
                    }));
                } catch (error) {
                    console.error('Error fetching data:', error);
                    return [];
                }
            }));

            return { count: results.flat().length, results: results.flat() };
        } catch (error) {
            console.error('Error:', error);
            return h.response({ error: 'Failed to fetch data' }).code(500);
        }
    }
};
