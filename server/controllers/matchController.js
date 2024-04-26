const Match = require('../models/Match');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the match with the given id, or an error message.
const getMatch = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such match exists');
    }

    const match = await Match.findById(id);

    if (!match) {
        return utilities.returnError(res, 404, 'No such match exists');
    }

    res.status(200).json(match);
}

// CREATE the match with the given request body parameters.
const createMatch = async (req, res) => {
    const { winnerScore, loserScore, date, teams, league, tournament } = req.body;

    try {
        const match = await Match.create({ 
            winnerScore, loserScore, date, teams, league, tournament
        });

       res.status(200).json(match);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

module.exports = { getMatch, createMatch };