const SwapiRoutes = [
    {type: 'planets', url: 'https://swapi.dev/api/planets/'},
    {type: 'starships', url:'https://swapi.dev/api/starships/'},
    {type: 'vehicles', url:'https://swapi.dev/api/vehicles/'},
    {type: 'people', url:'https://swapi.dev/api/people/'},
    {type: 'films', url:'https://swapi.dev/api/films/'},
    {type: 'species', url:'https://swapi.dev/api/species/'},
];

const SwapiBaseUrl = 'https://swapi.dev/api/';

module.exports = {SwapiRoutes, SwapiBaseUrl};