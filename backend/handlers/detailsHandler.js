const { SwapiBaseUrl } = require('../config/constants');

module.exports = {
    getDetails: async (request, h) => {
        try {
            const endpoint = `${SwapiBaseUrl}${request.params.type}/${request.params.id}`;
            const response = await fetch(endpoint);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return h.response({ error: 'Failed to fetch data' }).code(500);
        }
    }
};
