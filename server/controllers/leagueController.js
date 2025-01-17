const League = require('../models/League');
const Sport = require('../models/Sport');
const Match = require('../models/Match');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the leagues from the given organization which are currently active
const getActiveLeagues = async (req, res) => {
    const currentDate = new Date();
    const responseBody = [];

    const { id } = req.params;

    const leagues = await League
        .find({ 
            organization: id,
            startDate: { $lte: currentDate },
            endDate: { $gte: currentDate },
        })
        .sort({ startDate: -1 });

    for (var i = 0; i < leagues.length; i++) {
        const league = leagues[i];

        responseBody.push(
            {
                league,
                sport: await Sport.findById(league.sport)
            }
        )
    }
    
    res.status(200).json(responseBody);
}

// RETRIEVE the league with the given id.
const getLeague = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such league exists');
    }

    const league = await League.findById(id).populate('sport').populate('teams');

    if (!league) {
        return utilities.returnError(res, 404, 'No such league exists');
    }

    res.status(200).json(league);
}

// CREATE the league with the given request body parameters.
const createLeague = async (req, res) => {
    const { sport, startDate, endDate, organization } = req.body;

    try {
       const league = await League.create({ 
           sport, startDate, endDate, organization
       });

       res.status(200).json(league);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

// RETRIEVE the matches from the given league
const getMatchesFromLeague = async (req, res) => {
    const { id } = req.params;
    const matches = await Match.find({ league: id });
    
    res.status(200).json(matches);
}

// RETRIEVE the matches from the given league with teams and players
const getMatchesFromLeagueComplete = async (req, res) => {
    const { id } = req.params;
    const matches = await Match.find({ league: id }).populate({path: 'teams', populate: { path: 'players' }});
    
    res.status(200).json(matches);
}

// RETRIEVE the teams from the given league
const getTeamsFromLeague = async (req, res) => {
    const { id } = req.params;
    const league = await League.findById(id).populate({path: 'teams', populate: { path: 'players' }});

    res.status(200).json(league.teams);
}

// RETRIEVE the leagues from the organization id.
const getLeaguesByOrganization = async (req, res) => {
    const { id } = req.params;
    const leagues = await League.find({ organization: id }).populate('sport');

    res.status(200).json(leagues);
}

// UPDATES the league to add a team with the given id. Returns previous information about team.
// POST REQUEST MUST HAVE the teamID as a body attribute
const addTeamToLeague = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such league exists');
    }

    const league = await League.findOneAndUpdate({ _id: id}, { $push: { teams: req.body.teamID }}, { returnOriginal: false, runValidators: true} );

    if (!league) {
        return utilities.returnError(res, 404, 'No such league exists');
    }

    res.status(200).json(league);
}

module.exports = { getActiveLeagues, getLeague, createLeague, getMatchesFromLeague, getMatchesFromLeagueComplete, getTeamsFromLeague, getLeaguesByOrganization, addTeamToLeague };