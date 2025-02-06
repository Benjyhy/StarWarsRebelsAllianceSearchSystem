const Bcrypt = require('bcrypt');
const { users } = require('../db/users');

const validateUser = async (username, password) => {
    const user = users[username.toLowerCase()];
    if (!user) return { isValid: false, credentials: null };

    const isValid = await Bcrypt.compare(password, user.password);
    return { isValid, credentials: { id: user.id, name: user.name } };
};

module.exports = {
    welcome: (request, h) => {
        return 'Welcome to Star Wars Rebels Alliance Search System';
    },

    login: async (request, h) => {
        const { username, password } = request.payload;
        if (!username || !password) {
            return h.response({ error: 'Missing username or password' }).code(400);
        }

        const { isValid, credentials } = await validateUser(username, password);
        if (!isValid) {
            return h.response({ error: 'Invalid username or password' }).code(401);
        }

        return h.response({ message: 'Authentication successful', user: credentials }).code(200);
    }
};
