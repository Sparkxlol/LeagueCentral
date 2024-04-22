const League = require('../models/League');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the leagues from the given organization which are currently active
const getActiveLeagues = async (req, res) => {
    const currentDate = new Date();
    const leagues = await League
        .find({ 
            startDate: { $lte: currentDate },
            endDate: { $gte: currentDate },
        })
        .sort({ startDate: -1 });
    
    res.status(200).json(leagues);
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

module.exports = { getActiveLeagues, createLeague };