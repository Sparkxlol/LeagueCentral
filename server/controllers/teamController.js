const Team = require('../models/Team');
const Match = require('../models/Match');
const League = require('../models/League');
const User = require('../models/User');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the team with the given id, or an error message.
const getTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    const team = await Team.findById(id);

    if (!team) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    res.status(200).json(team);
}

// RETRIEVE the team with the given id and the players
const getTeamWithPlayers = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    const team = await Team.findById(id).populate('players');

    if (!team) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    res.status(200).json(team);
}

// CREATE the team with the given request body parameters.
const createTeam = async (req, res) => {
    const { name, description, picture } = req.body;

    try {
       const team = await Team.create({ 
           name, description, picture
       });

       res.status(200).json(team);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

// UPDATES the team to add a player with the given id. Returns previous information about team.
// POST REQUEST MUST HAVE playerID body attribute
const addPlayerToTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    const team = await Team.findOneAndUpdate({ _id: id}, { $push: { players: req.body.playerID }}, { returnOriginal: false });

    if (!team) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    res.status(200).json(team);
}

// RETRIEVES the players from the given team
const getPlayersFromTeam = async (req, res) => {
    const responseBody = [];
    const { id } = req.params;
    const team = await Team.findById(id);
    const players = team.players;

    for (var i = 0; i < players.length; i++) {
        responseBody.push(
            await User.findById(players[i])
        )
    }
    
    res.status(200).json(responseBody);
}

// RETRIEVES the latest match from the given team
const getLatestMatch = async (req, res) => {
    const { id } = req.params;
    const match = await Match.find({ teams: id }).sort({ date: -1 }).limit(1).populate('teams');

    const returnMatch = (match == null) ? null : match[0];

    res.status(200).json(returnMatch);
}

// RETRIEVES the league from the team with the given id.
const getLeagueFromTeam = async (req, res) => {
    const { id } = req.params;
    const league = await League.findOne({ teams: id }).populate('sport');

    res.status(200).json(league);
}

module.exports = { getTeam, getTeamWithPlayers, createTeam, addPlayerToTeam, getPlayersFromTeam, getLatestMatch, getLeagueFromTeam };