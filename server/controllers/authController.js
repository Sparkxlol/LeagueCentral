require('dotenv').config();
const jwt = require('jsonwebtoken');

const COOKIE_NAME = 'leagueCentral_jwt';

const createToken = (userID) => {
    const tokenDuration = 24 * 60 * 60;

    const token = jwt.sign({ userID }, process.env.JWTSecret, {
        expiresIn: tokenDuration
    });

    return token;
}

const addCookieToResponse = (res, userID) => {
    // Day long token/cookie expiry date.
    const tokenDuration = 24 * 60 * 60;
    const cookieDuration = tokenDuration * 1000;

    const token = createToken(userID);

    res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: "strict", maxAge: cookieDuration });
}

const removeCookieFromResponse = (res) => {
    res.clearCookie(COOKIE_NAME);
}

// RETRIEVES JWT Token with proper information. MAKE SURE TO HAVE httpOnly: true, sameSite: "strict", maxAge: 1 day
const getJWT = (req, res) => {
    // Day long token/cookie expiry date.
    const tokenDuration = 24 * 60 * 60;
    const token = createToken(userID);

    res.json({ token });
}

module.exports = { getJWT, createToken, addCookieToResponse, removeCookieFromResponse };

