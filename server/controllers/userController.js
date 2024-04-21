const User = require('../models/User');
const mongoose = require('mongoose');

// RETRIEVE the user with the given id, or an error message.
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return returnError(res, 404, 'No such user exists');
    }

    const user = await User.findById(id);

    if (!user) {
        return returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// CREATE the user with the given request body parameters. If parameters not given, they are assumed to be NULL.
const createUser = async (req, res) => {
    const { firstName, lastName, userName, email, password,
         dateOfBirth, gender, organization, phone, profilePicture } = req.body;

    try {
        const user = await User.create({ 
            firstName, lastName, userName, email, password,
            dateOfBirth, gender, organization, phone, profilePicture 
        });

        res.status(200).json(user);
    }
    catch (error) { return returnError(res, 400, error.message) };
}

// DELETE the given user and return the deleted user's information.
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return returnError(res, 404, 'No such user exists');
    }

    const user = await User.findOneAndDelete({ _id: id});

    if (!user) {
        return returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// UPDATE the given user and return their previous information.
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return returnError(res, 404, 'No such user exists');
    }

    const user = await User.findOneAndUpdate({ _id: id}, { ...req.body});

    if (!user) {
        return returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// Returns a 404 page with the given error message.
const returnError = (res, errorValue, errorString) => {
    return res.status(errorValue).json({ error: errorString });
}

module.exports = { getUser, createUser, deleteUser, updateUser };