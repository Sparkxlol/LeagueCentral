const User = require('../models/User');
const Team = require('../models/Team');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const utilities = require('./utilities');
const auth = require('./authController');


// RETRIEVE the user with the given id, or an error message.
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    const user = await User.findById(id);

    if (!user) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// CREATE the user with the given request body parameters. If parameters not given, they are assumed to be NULL.
// Logs in the user using a JWT token.
const createUser = async (req, res) => {
    const { firstName, lastName, userName, email, password,
         dateOfBirth, gender, organization, phone, profilePicture } = req.body;
        
    try {
        const user = await User.create({ 
            firstName, lastName, userName, email, password,
            dateOfBirth, gender, organization, phone, profilePicture 
        });

        auth.addCookieToResponse(res, user._id);
        res.status(200).json(user);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

// DELETE the given user and return the deleted user's information.
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    const user = await User.findOneAndDelete({ _id: id});

    if (!user) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// UPDATE the given user and return their previous information.
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    const user = await User.findOneAndUpdate({ _id: id}, { ...req.body});

    if (!user) {
        return utilities.returnError(res, 404, 'No such user exists');
    }

    res.status(200).json(user);
}

// REDIRECTS to the createUser function
const registerUser = async (req, res) => {
    createUser(req, res);
}

// RETRIEVE the user with the given body, verify information, and log in.
// Logs in user using a JWT token.
const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    // Verifies the user exists and the entered email/pass combination is valid.
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            auth.addCookieToResponse(res, user._id);
            return res.status(200).json(user);
        }
    }

    return utilities.returnError(res, 400, 'Invalid email or password');
}

// logs out the user by removing the JWT token.
const logoutUser = (req, res) => {
    auth.removeCookieFromResponse(res);
    res.status(200).json({});
}

// RETRIEVE teams from the given player id.
const getTeamsFromUser = async (req, res) => {
    const { id } = req.params;

    const teams = await Team.find({ players: id })
    console.log(teams[0]);
    
    res.status(200).json(teams);
}

module.exports = { getUser, createUser, deleteUser, updateUser, registerUser, loginUser, logoutUser, getTeamsFromUser };