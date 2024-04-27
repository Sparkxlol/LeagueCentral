const Match = require('../models/Match');
const Team = require('../models/Team');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the match with the given id, or an error message.
const getMatch = async (req, res) => {
    const { id } = req.params;

    console.log('huh');

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

// RETRIEVE the players from the match with the given ids. Assume match exists.
const getPlayersFromMatch = async (req, res) => {
    const responseBody = [];
    const { id } = req.params;
    const match = await Match.findById(id);
    const teams = match.teams;

    for (var i = 0; i < teams.length; i++) {
        responseBody.push(
            await Team.findById(teams[i])
        )
    }
    
    res.status(200).json(responseBody);
}

module.exports = { getMatch, createMatch, getPlayersFromMatch };