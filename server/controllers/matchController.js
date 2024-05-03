const Match = require('../models/Match');
const Team = require('../models/Team');
const mongoose = require('mongoose');
const utilities = require('./utilities');
const League = require('../models/League');
const Organization = require('../models/Organization');

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
    const { team1Score, team2Score, date, teams, league } = req.body;

    try {
        const match = await Match.create({ 
            team1Score, team2Score, date, teams, league
        });

       res.status(200).json(match);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

// RETRIEVE the teams from the match with the given ids. Assume match exists.
const getTeamsFromMatch = async (req, res) => {
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

// RETRIEVE the organization with a given match id.
const getOrganizationFromMatch = async (req, res) => {
    const { id } = req.params;
    const match = await Match.findById(id);

    const league = await League.findById(match.league);
    const organization = await Organization.findById(league.organization);

    res.status(200).json(organization);
}

module.exports = { getMatch, createMatch, getTeamsFromMatch, getOrganizationFromMatch };