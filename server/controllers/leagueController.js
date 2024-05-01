const League = require('../models/League');
const Sport = require('../models/Sport');
const Match = require('../models/Match');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the leagues from the given organization which are currently active
const getActiveLeagues = async (req, res) => {
    const currentDate = new Date();
    const responseBody = [];

    const leagues = await League
        .find({ 
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

    const league = await League.findById(id).populate('sport');

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

module.exports = { getActiveLeagues, getLeague, createLeague, getMatchesFromLeague };