require('dotenv').config();
const jwt = require('jsonwebtoken');

const COOKIE_NAME = 'leagueCentral_jwt';

const createToken = (userID) => {
    const tokenDuration = 15 * 60;

    const accessToken = jwt.sign({ userID }, process.env.JWTSecret, {
        expiresIn: tokenDuration
    });

    const refreshToken = jwt.sign({ userID }, process.env.JWTSecret, {
        expiresIn: tokenDuration * 60
    });

    return accessToken;
}

module.exports = { createToken };

