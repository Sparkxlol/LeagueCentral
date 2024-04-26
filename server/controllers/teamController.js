const Team = require('../models/Team');
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

    const team = await Team.findOneAndUpdate({ _id: id}, { $push: { players: req.body.playerID }});

    if (!team) {
        return utilities.returnError(res, 404, 'No such team exists');
    }

    res.status(200).json(team);
}

module.exports = { getTeam, createTeam, addPlayerToTeam };