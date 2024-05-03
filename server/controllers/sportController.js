const Sport = require('../models/Sport');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE all sports
const getSports = async (req, res) => {
    const sports = await Sport.find({});

    res.status(200).json(sports);
}

// CREATE the sport with the given request body parameters.
const createSport = async (req, res) => {
    const { name, description, maxPlayers, maxRoster, picture } = req.body;

    try {
        const sport = await Sport.create({ 
           name, description, maxPlayers, maxRoster, picture
        });

        res.status(200).json(sport);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

module.exports = { createSport, getSports };
