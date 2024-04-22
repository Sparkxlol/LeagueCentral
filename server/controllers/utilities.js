// Returns a 404 page with the given error message.
const returnError = (res, errorValue, errorString) => {
    return res.status(errorValue).json({ error: errorString });
}

module.exports = { returnError };